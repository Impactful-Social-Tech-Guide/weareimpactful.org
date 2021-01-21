# Larissa Nguyen

import urllib2


# Steps
# 1. Open Up website
# 2. Check for errors
# 3. Check for redirects

def check_one_link(url):
    try:
        response = urllib2.urlopen(url)
        code = response.getcode()
        return code
    except urllib2.HTTPError as e:
        return e.code
    except:
        return 0


def main(url = 'https://jobs.jobvite.com/ashoka/job/onGk5fwc'):
	code = check_one_link(url)
	print(code)

main()