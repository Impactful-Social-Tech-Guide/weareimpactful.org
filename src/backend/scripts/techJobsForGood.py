import requests
from bs4 import BeautifulSoup
import pandas as pd
import pprint
import checkExperience
import jobScraper

# def load_jobs_from_one_site(url = '', html_attr = ''):
#         if url is not '':
#             print(url)
#             page = requests.get(url)
#             soup = BeautifulSoup(page.content, "html.parser")
#             job_soup = soup.find(class_= html_attr)
#             return job_soup

def load_tech_jobs_for_good():
    url = 'https://www.techjobsforgood.com/jobs/?q=&seniority=Entry+Level&seniority=Intern'
    attr = "content"
    return jobScraper.load_jobs_from_one_site(url, attr, True)

def bleh():
    html_soup = load_tech_jobs_for_good()
    for job in html_soup:
        if 'extra' not in job.attrs['class']:
            print(job)  
            print('\n')

def extract_one_job_tjfg(job_html):
    pass

def test():
    bleh()

test()