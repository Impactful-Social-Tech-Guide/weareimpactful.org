import requests
from bs4 import BeautifulSoup
import pandas as pd
import pprint
import checkExperience

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

# takes in a url and outputs the html that stores all the job information
def load_jobs_from_one_site(url = '', html_attr = '', find_all = False):
        if url is not '':
            print(url)
            page = requests.get(url)
            soup = BeautifulSoup(page.content, "html.parser")
            job_soup = soup.find(class_= html_attr)
            if find_all == True:
                job_soup = soup.find_all(class_ = html_attr)
            return job_soup

def job_info_to_json(job_name, 
                     url, 
                     date, 
                     organization, 
                     location, 
                     role):

    job = {'job' : job_name,
           'link' : url,
           'date_posted' : date,
           'org' : organization,
           'location' : location,
           'role' : role}

    return job   

def remove_higher_level_jobs(jobs_list) -> list:
    keywords = ['director', 'senior', 'mid-level']
    trimmed_jobs_list = []

    for job in jobs_list:
        to_add = True
        for keyword in keywords:
            if job['job'].casefold().find(keyword) is not -1:
                to_add = False 
        if to_add is True:
            trimmed_jobs_list.append(job)
    return trimmed_jobs_list


def reformat_job_list_for_df(job_list):
    titles = []
    links = []
    dates = []
    orgs = []
    locations = []
    # imgs = []
    roles = []

    for job in job_list:
        titles.append(job['job'])
        links.append(job['link'])
        dates.append(job['date_posted'])
        orgs.append(job['org'])
        locations.append(job['location'])
        # imgs.append(job['img_link'])
        roles.append(job['role'])

    jobs_list_for_df = {'job title' : titles,
                        'link' : links,
                        'date posted' : dates,
                        'org' : orgs,
                        'location' : locations,
                        # 'imgs' : imgs, 
                        'role' : roles}

    return jobs_list_for_df

def save_jobs_to_excel(jobs_list_for_df, filename):
    jobs = pd.DataFrame(jobs_list_for_df)
    jobs.to_excel(filename)


             

