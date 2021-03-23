# Larissa Nguyen 2.18.21

from bs4 import BeautifulSoup
import urllib
import requests
import re
import sys
from pprint import pprint

# takes in URL
# opens page up
# gets job description
# check years of experience needed
# output years in numbers or "no experience"
# add error-checking

def loadJobListing(url: str) -> str:
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    return soup

def getText(soup) -> str:
    description = soup.get_text()
    return description

def getYearsRegex(description: str) -> str:
    # defining the regex for years exp
    yearsRegex = re.compile('\\d\\s*\\+?-?\\s*\\d?\\s*[yY]e?a?[rR][Ss]?')
    return yearsRegex.findall(description)

# for multiple results, try returning just the last in the list of matches and see how accurate it is
def getYearsExperience(url:str, src: str = '') -> list:
    soup = loadJobListing(url)
    description = getText(soup)
    matches = getYearsRegex(description)

    if src.lower() == "ffwd":
        return trimFfwdExperience(matches)
    else:
        return matches

def trimFfwdExperience(matches: list) -> list:
    experience = []
    for match in matches:
        if match != '5 Year':
            experience.append(match)
    return experience

def test():
    # url = 'https://www.ffwd.org/tech-nonprofit-jobs/s/talkingpoints-technical-product-manager-ai-data-products/'
    # urlList = [
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/coachme-full-stack-developer-technical-co-founder-role/',
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/communityshare-front-end-developer-2/',
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/simprints-technology-partnerships-manager/',
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/propose-your-own-internship-2/',
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/glen-world-web-frontend-backend-development/',
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/communication-and-donor-engagement-intern/',
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/design-intern/',
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/graphic-designer-3/', 
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/adopttogether-graphic-designer/',
    #     'https://www.ffwd.org/tech-nonprofit-jobs/s/programmatic-intern-finance-intern-graphic-design-intern-social-media-intern/',
    # ]

    urlList = [
        "https://www.ffwd.org/tech-nonprofit-jobs/s/sirum-qa-engineer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/communityshare-front-end-developer-2/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/simprints-technology-partnerships-manager/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/simprints-technology-technical-product-manager-cloud-analytics-2/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/talkingpoints-technical-product-manager-ai-data-products/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/sirum-qa-engineer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/wikimedia-foundation-associate-engineer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/communityshare-front-end-developer-2/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/wikimedia-foundation-engineering-manager-site-reliability-engineering-sre/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/wikimedia-foundation-site-reliability-engineer-2/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/one-degree-software-quality-engineer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/one-degree-software-developer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/freefrom-data-and-research-specialist/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/wikimedia-foundation-manager-developer-advocacy-engineering/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/upchieve-software-engineer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/sirum-qa-engineer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/the-ocean-cleanup-open-applications/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/coachme-full-stack-developer-technical-co-founder-role/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/open-law-library-engineer-legal-experience/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/wikimedia-foundation-vp-product-engineering/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/zearn-full-stack-software-engineer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/code-org-software-engineer-4/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/code-org-devops-engineer-2/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/universalgiving-lead-backend-engineerlead-full-stack-engineer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/upchieve-designer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/commonlit-ux-ui-designer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/video-volunteers-video-editor-odiya-speaking/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/universalgiving-lead-backend-engineerlead-full-stack-engineer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/ngo-corporate-vetting-assistant/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/product-designer-3/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/video-editor/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/interactive-web-designer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/motion-graphics-designer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/software-engineering-intern/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/glen-world-web-frontend-backend-development/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/universalgiving-fall-2017-ngo-services-intern/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/communications-intern-immigration-advocates-network/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/research-internship/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/glen-world-web-frontend-backend-development/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/software-engineering-intern-full-stack/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/propose-your-own-internship-2/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/glen-world-web-frontend-backend-development/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/communication-and-donor-engagement-intern/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/design-intern/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/graphic-designer-3/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/adopttogether-graphic-designer/" , "https://www.ffwd.org/tech-nonprofit-jobs/s/programmatic-intern-finance-intern-graphic-design-intern-social-media-intern/"
    ]

    for url in urlList:
        print(getYearsExperience(url,"FFWD"))      