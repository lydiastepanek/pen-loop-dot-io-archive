---
title: Launching Is This Phishy 🎣📩
date: 2023-05-17T17:56:47+06:00
image: "/images/posts/is_this_phishy.png"
categories: ["entrepreneurship"]
authors: ["Lydia Stepanek"]
tags: ["phishing", "free", "email server"]
draft: false
---

And here we are! One startup done, six weeks passed.

For each startup I launch, I’ll be writing a post like this, and explaining how it achieves my broader [goal](/im-building-12-cybersecurity-startups-in-12-months) this year to make cybersecurity products more accessible to a wider audience. Since this was my first startup, I wanted to make something that would be useful for everyone from your kid brother to your grandma: an elegant email server that can identify phishing emails.

So I made a friendly email address to which you can forward sketchy emails (for free) and it tells you whether the email is a phishing scam 🎣📩. Check it out on [Product Hunt](https://www.producthunt.com/products/is-this-phishy).

## 🤔 The Problem
The problem is that every time I get a sketchy email, I never know whether it's a phishing scam. When I google “how to identify a phishing email," hundreds of websites offer one hundred different answers. My cousin works at a big bank, and she told me that bank customers can send suspicious-looking emails to the security team, and they’ll tell you whether it’s a phishing attempt. That’s what made me realize there needs to be a similar service for any person, for any email, anywhere.

## 🛠️ Solution
Say hello to help@isthisphishy.io, a friendly email address that you can forward any and all emails to (for free), and you’ll get a response telling you why or why not the email is a phishing scam. 🎣📩 Check it out at [isthisphishy.io](https://isthisphishy.io/).

## 🚨 The Launch
Since this was my first launch ever, I followed the advice of Read Make and took a "spray and pray" approach, posting about my launch everywhere from Twitter and Reddit to Indie Hackers and Elpha.

One month after its launch, Is This Phishy was featured on prominent blogs like [Insanely Useful Websites](https://newsletter.insanelyusefulwebsites.com/p/iuw-78), the [OneLaunch blog](https://blog.onelaunch.com/new-email-scams-to-watch-for), the [Mike Taylor blog](https://mike-taylor.org/blog-2), and [Beta List](https://betalist.com/startups/is-this-phishy). It also reached 403 monthly active users in its first month.

The single biggest social media response came from my [post](https://www.reddit.com/r/msp/comments/13oy0kr/roast_my_landing_page) to Reddit's r/msp (managed service provider) community, which garnered 23,200 impressions and a big uptick in users. Before posting, I didn't realize that the group had 148k members worldwide; I simply wanted good feedback on my landing page. I started laughing incredulously when I noticed that the post had 4,000 impressions only a few minutes after I'd posted it. In the end, I got 39 comments from people who cumulatively had decades of IT experience. (I know this because I DM'd some of them to get feedback on future product ideas.) Many commenters, unsurprisingly, wanted more security transparency before they used my service. This feedback inspired me to add a security notification to the top every email:

![](/images/posts/reddit.png "reddit")

Additionally, my [post](https://www.linkedin.com/feed/update/urn:li:activity:7064628717188210688) to LinkedIn fetched 3,422 impressions and 96 likes, by far the most "likes" I got anywhere. (By comparison, my [post](https://news.ycombinator.com/item?id=35976876) to Hacker News got only 4 likes.) I was surprised and pleased by the number of friends and former coworkers who saw the post on LinkedIn and reached out to say they'd shared Is This Phishy with their IT team. Some even sent me the feedback from their IT teams which was especially helpful.

In the first week of launch, Is This Phishy made it to #45 on Product Hunt (out of 144 total product launches that day), and over 400 people viewed it:

![](/images/posts/analytics.png "analytics traffic")

## 💰 Biggest win: IsThisPhishy.io costs only $26.66/month to build and maintain
I’m most comfortable with AWS, so I decided to use AWS for this project. Whenever I researched email server solutions, AWS was always much cheaper than competitors like Mailgun: AWS SES only costs $0.10 cents per 1,000 emails sent, while Mailgun costs eight times more. This means that my costs for running isthisphishy.io are REALLY low, so I can offer it for free.

Expenses to maintain the isthisphishy.io site:

* $89/year: cruip.com for static website design template (this was a one time purchase but for simplicity I’ll record it as an annual purchase)
* $36/year: Registering domain name isthisphishy.io on Cloudflare
* $0: Cloudflare pages for hosting

Expenses to maintain the email server:

* $16/month – Amazon Workmail (for an email client interface to read the emails sent to my four @isthisphishy.io email addresses)
* $1.39/month – Amazon Simple Email Service (for receiving and sending automated emails)
* $0.09/month – Amazon Simple Storage Service (for storing emails in the cloud)
* $0.01/month – AWS Lambda (for running arbitrary code in a container when an email is sent to isthisphishy.io)
* $0.07/month - Amazon Elastic Container Registry (for hosting container images containing the email server code)
* $0.01/month - Amazon Cloudwatch and Simple Notification Service (for getting alerts when things go wrong)

Total: $27.99/month

## 💪 Reflection on Productivity
Ever since reading The 4-Hour Workweek, my life goal has been to accomplish as much as possible in as few hours as possible. (Ideally, 4 hours of work per week.)

For the past six weeks, I worked around 5 hours per day, 6 days a week, so I worked a 30-hour week. Certainly, I came nowhere close to Ferris’s 4-hour per week target, but he was selling muscle supplements, and I’m building a web app, so I’ll forgive myself the 26 extra hours.

These are the things I did well productivity-wise that I will continue:

* **Only do what feels fun on a given day**: This philosophy was inspired by advice from my friend Pooja. I always try to have 3 pots cooking simultaneously: blog drafts I’m working on, app code I’m writing, and business activities like tracking costs or signing papers. Some days I wake up and want to work on code, while others, I wake up, and write. To keep myself motivated, I do whatever feels like fun that day. That way, I keep my energy and motivation levels up. (In the spirit of honesty, signing business forms is something I never wake up wanting to do. So I force myself to do that one, but only when I have lots of energy/coffee.)
* **Use a coworking space**: As someone who used to work from home most of the time, splurging on a coworking space has been a game changer. Having a separation of home and work keeps me more motivated because I get time to relax every day when I’m in my “home” space. (And by “relax,” I mean watch Love is Blind.)

Things I could do better next time:

* **Get to my coworking space earlier**: I now realize it takes me about 1.5 hours to actually start coding after I sit down at my computer – after all, there’s Architectural Digest to read, and Harry Styles’ love life to track. It takes a really long time to warm up my brain. I need to just accept this, plan for it, and sit at my desk sooner in the day.
* **Go straight to the docs**: Instead of wasting time watching tutorials on youtube, I wish I’d gone straight to the AWS docs sooner. [This](https://aws.amazon.com/blogs/messaging-and-targeting/forward-incoming-email-to-an-external-destination) was the main AWS tutorial I used for building the MVP of my email server, and I wish I’d started with it. There’s a lot of bad training content on the internet, and I need to ensure I’m using the most trusted online sources. (Yes, this is a jab at ChatGPT.)

## Biggest technical learning: Parsing forwarded emails is surprisingly hard 📨
I built my MVP in Python first, only to realize three weeks in that Python does not have any libraries to parse forwarded emails. Different email clients – Gmail, Yahoo Mail, Outlook, etc. – all format forwarded emails in different ways, so it’s actually really complicated to parse something as simple as the “from” sender on a forwarded email. And I didn't want to build a parsing library from scratch in Python – I only had one month! The only code I could find online that could parse forwarded emails for all email clients was written in Javascript: Crisp's [email-forward-parser](https://github.com/crisp-oss/email-forward-parser) library. This meant that halfway into this project after I’d built my MVP in Python, I had to rewrite everything in Javascript, which I hadn't coded in since 2019.

The silver lining: being an independent developer allows me to choose my own technical stack, which I’ve never been able to do before. I was able to switch to JavaScript on a dime to best serve my development needs, which was very liberating!
