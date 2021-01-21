import urllib
import requests
from bs4 import BeautifulSoup
import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
import pandas as pd
import os
import pprint
import re

# order of coding
# - choose a site to scrape from
# 1a. pull all jobs from a single site (first page only) and output in terminal
# 1b. pull all jobs from a single site (first page only) and output as csv
# 2. narrow down search by job role (if possible)
# 3. narrow down search by experience level (if possible)
#             ------------------------------
# 4. narrow down search by time period
# 5. output to airtable
# 6. pull jobs from all pages (if multipage search results)


# TO DO
# - include experience level in output
# - change link from ffwd link to original link --> lots of edge cases though

# steps for each site
# - go to correct url
# - identify div with relevant job information
# - sort through all jobs for just the job name
# - sort through all jobs and get job name, link, (role type), company, location


# PULLING FROM FAST FORWARD


def remove_higher_level_jobs(jobs_list):
    keywords = ['director', 'senior', 'mid-level']
    trimmed_jobs_list = []

    for job in jobs_list:
        to_add = True
        for keyword in keywords:
            # print(keyword, job)
            if job['job'].casefold().find(keyword) is not -1:
                to_add = False 
        if to_add is True:
            trimmed_jobs_list.append(job)
    return trimmed_jobs_list

def extract_all_jobs_from_ffwd():
    roles = ['product','engineer', 'engineering', 'design']
    exp_lvls = ['full-time-job', 'internship']
    jobs_list = []

    for level in exp_lvls:
        for role in roles:
            jobs_html_list = load_ffwd_jobs(role, level)
            if jobs_html_list is None:
                continue
            for job_html in jobs_html_list:
                extracted_job = extract_one_job_ffwd(job_html, role)
                jobs_list.append(extracted_job)
    
    return jobs_list

def load_ffwd_jobs(role = '', exp_lvl = 'full-time-job,internship'):
    url = 'https://www.ffwd.org/tech-nonprofit-jobs/opportunities/?_sft_position_type=' + exp_lvl
    if role is not '':
        url = url + '&_sft_position_category=' + role
    print(url)
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    job_soup = soup.find(class_="sf-result")
    # job_list = job_soup.find_all("li")

    return job_soup

def extract_one_job_ffwd(html_list_item, role = ''):    
    a_link = html_list_item.find('a')
    job_name = a_link.text
    url = a_link.get('href')
    subtitle = html_list_item.find('p').text.split(" | ")
    date = subtitle[0].strip()
    organization = subtitle[1].strip()
    location = subtitle[2].strip()
    img = html_list_item.find('img').get('src')
    if role is 'engineering' or role is 'engineer':
        role = 'software engineering'

    job = {'job' : job_name ,
           'link' : url,
           'date_posted' : date,
           'org' : organization,
           'location' : location,
           'img_link' : img,
           'role' : role}

    return job

def reformat_job_list_for_df(job_list):
    titles = []
    links = []
    dates = []
    orgs = []
    locations = []
    imgs = []
    roles = []

    for job in job_list:
        titles.append(job['job'])
        links.append(job['link'])
        dates.append(job['date_posted'])
        orgs.append(job['org'])
        locations.append(job['location'])
        imgs.append(job['img_link'])
        roles.append(job['role'])

    jobs_list_for_df = {'job title' : titles,
                        'link' : links,
                        'date posted' : dates,
                        'org' : orgs,
                        'location' : locations,
                        'imgs' : imgs, 
                        'role' : roles}

    return jobs_list_for_df

def save_jobs_to_excel(jobs_list_for_df, filename):
    jobs = pd.DataFrame(jobs_list_for_df)
    jobs.to_excel(filename)

def get_all_jobs_from_site():
    pass

def find_last_page():
    pass

def find_jobs_from_tech_jobs_for_good():
    pass

def output_jobs(jobs_list, num_listings, website, filename='results.xls'):
    jobs_list_for_df = reformat_job_list_for_df(jobs_list)
    final_jobs_list = save_jobs_to_excel(jobs_list_for_df, filename)
    print('{} new job postings retrieved from {}. Stored in {}.'.format(num_listings, 
                                                                          website, filename))

def find_relevant_jobs():
    jobs_list = extract_all_jobs_from_ffwd()
    jobs_list = remove_higher_level_jobs(jobs_list)
    output_jobs(jobs_list, len(jobs_list), 'Fast Forward')

find_relevant_jobs()
