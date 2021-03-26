import requests
from bs4 import BeautifulSoup
import pandas as pd
import pprint
import checkExperience
from jobScraper import load_jobs_from_one_site, job_info_to_json, remove_higher_level_jobs, reformat_job_list_for_df, save_jobs_to_excel, output_jobs
import re

# def load_jobs_from_one_site(url = '', html_attr = ''):
#         if url is not '':
#             print(url)
#             page = requests.get(url)
#             soup = BeautifulSoup(page.content, "html.parser")
#             job_soup = soup.find(class_= html_attr)
#             return job_soup

def load_tjfg(role = '', exp_lvl = ''):
    url = 'https://www.techjobsforgood.com/jobs/?q='

    if role == "product":
        url += '&job_function=Product'
    elif role == "data":
        url += '&job_function=Data+%2B+Analytics'
    elif role == "design":
        url += '&job_function=Design+%2B+UX'
    elif role == "engineering":
        url += '&job_function=Engineering'

    if exp_lvl == "full-time":
        url += '&seniority=Entry+Level'
    elif exp_lvl == "intern":
        url += '&seniority=Intern'
    else:
        url += '&seniority=Entry+Level&seniority=Intern'

    attr = "ui raised card"
    return load_jobs_from_one_site(url, attr, True)

def extract_one_job_tjfg(job_html, role = '', exp_lvl = ''):
    job = job_html.find(class_ = "header").text.strip()
    
    urlDraft =  job_html.find(class_ = "content")['onclick'] #gets the "location.href='/jobs/###'"
    job_id = urlDraft[15:-2]
    urlBase = 'https://www.techjobsforgood.com'
    url = urlBase + job_id

    date_added = job_html.find(text=re.compile("Posted"))[7:]
    org = job_html.find(class_ = "ui button").text.strip()
    location = job_html.find(class_ = "location").text
    
    return job_info_to_json(job, url, date_added, org, location, role, exp_lvl)

def extract_all_jobs_from_tjfg():
    roles = ['product','data', 'engineering', 'design']
    exp_lvls = ['full-time', 'intern']
    
    jobs_list = []

    for level in exp_lvls:
        for role in roles:
            jobs_html_list = load_tjfg(role, level)
            if jobs_html_list is None:
                continue
            for job_html in jobs_html_list:
                # pprint.pprint(job_html)
                extracted_job = extract_one_job_tjfg(job_html, role, level)
                jobs_list.append(extracted_job)  

    return jobs_list
    
def tech_jobs_output():
    jobs = extract_all_jobs_from_tjfg()
    jobs = remove_higher_level_jobs(jobs)
    output_jobs(jobs, len(jobs), 'Tech Jobs for Good', 'TJFG_results.xls')

tech_jobs_output()