import requests
from bs4 import BeautifulSoup
import pandas as pd
import pprint
import checkExperience
from jobScraper import load_jobs_from_one_site, job_info_to_json, remove_higher_level_jobs, reformat_job_list_for_df, save_jobs_to_excel, output_jobs

# Fast Forward Specific

def load_ffwd_jobs(role = '', exp_lvl = 'full-time-job,internship'):
    url = 'https://www.ffwd.org/tech-nonprofit-jobs/opportunities/?_sft_position_type=' + exp_lvl
    if role is not '':
        url = url + '&_sft_position_category=' + role
    attr = "sf-result"
    return load_jobs_from_one_site(url, attr)

def extract_one_job_ffwd(html_list_item, role = '', exp_lvl = ''):    
    a_link = html_list_item.find('a')
    job_name = a_link.text
    url = a_link.get('href')
    subtitle = html_list_item.find('p').text.split(" | ")
    date = subtitle[0].strip()
    organization = subtitle[1].strip()
    location = subtitle[2].strip()
    # img = html_list_item.find('img').get('src')
    if role is 'engineering' or role is 'engineer':
        role = 'software engineering'

    job = job_info_to_json(job_name, url,  date, organization, location, role, exp_lvl)

    return job

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
                # pprint.pprint(job_html)
                extracted_job = extract_one_job_ffwd(job_html, role, level)
                jobs_list.append(extracted_job)
    
    return jobs_list

def get_all_jobs_from_site():
    pass

def find_last_page():
    pass

def find_jobs_from_tech_jobs_for_good():
    pass


def find_relevant_jobs():
    jobs_list = extract_all_jobs_from_ffwd()
    jobs_list = remove_higher_level_jobs(jobs_list)
    output_jobs(jobs_list, len(jobs_list), 'Fast Forward', 'FFWD_results.xls')

find_relevant_jobs()