---
title: "A Brief History of Paywalls"
description: "meta description"
date: 2023-02-02T07:00:00Z
image: "/images/posts/02.jpg"
categories: ["technology"]
authors: ["Lydia Stepanek"]
tags: ["technology"]
draft: false
---

As a fancy technologist who enjoys looking at celebrity real estate, my three favorite websites are Wired, Architectural Digest, and Curbed, and all of them allow me to read a few articles per month before a paywall goes up. Occasionally, I send article links from these sites to my nearest and dearest, and often get the same response: “I can’t see the article, it’s behind a paywall.”

I get annoyed whenever I think about paywalls, because they're preventing us from sharing information. And over the past 10 years, I've noticed paywalls become ubiquitous. Even worse, they're taking a turn towards relying on IP addresses to track users, which makes them even harder to get around.

## Cookies

First, I should explain what cookies are, and how websites use them for paywalls.

![](/images/posts/cookies.png "Cookies?!")

Let’s say you visit wired.com, and wired.com only allows you to view one article per month before you have to sign up for a subscription. So when you visit the site in a Chrome browser, wired.com will add a cookie in that browser saying you visited their site. Next time you visit, tada!, you’ll see a “You’ve hit your monthly limit on free articles, please subscribe now” popup. But – excitingly for those of us who spend way too much time avoiding paywalls – if you visit wired.com in a Chrome Incognito browser, the cookie from your non-Incognito browser won’t carry over, allowing you to view one article anew. (The same will happen if you switch to Firefox, or to Firefox Private Browser, or to Internet Explorer, and so on and so forth.) There’s also a somewhat harder solution, which is to  delete the cookies manually in the “inspect” page of any browser:

![](/images/posts/inspect.png "Inspect to delete cookies")

There are also other, more complicated, workarounds for avoiding cookie-based paywalls, like using the Wayback Time Machine, or the Reader Mode browser extension, or others that you can find online.

## Paywall History Exhibit A: The New York Times

*Cookies?* The New York Times scoffed in 2019.

You may have noticed that, nowadays, the Times’ website has an incredibly strict paywall that doesn’t even allow one free article. They’ve certainly changed their paywall dramatically, compared to 2010, when you could delete everything after “&gwh” in the url, refresh the page, and see any Times article you wanted.

Since then, there’s been constant evolution in the Times paywall:

In 2011, the Times caught on to the “&gwh” workaround, and since they had – and still have – relatively deep pockets (for a newspaper company), they spent $40-50 million up front to rebuild their paywall. After that rebuild, they only allowed 10 free articles per month. (Needless to say, I never paid for a subscription during this time, as there were still tons of workarounds even if the “&gwh” one didn’t work anymore.)

Then, in early 2019, as a harbinger of what was to come, the Times blocked articles from being visible in Incognito mode. *Hah, losers!* I thought, *I still have 7 other browser softwares and I’m not afraid to use them.*

Finally, the moment of truth came: in July 2019, they started forcing non-logged-in-users to register to even read ONE article. (Pay!! To see!! One!! Article!!) Ever since 2019, the Times hasn’t allowed any free articles. Clearly, they got sick of trying to build fancy paywalls, and decided to throw in the towel.

Checkmate. By 2019, even I had to admit that I’d been beat. Grudgingly, I signed up for a digital subscription to the Times. And so did the rest of the world:

![](/images/posts/02.jpg "NYT")
*2020 was a good year for noone except the New York Times.*

In the first half of 2020 alone, the Times added one million users. Apparently paywalls can result in a lot of money if people are stuck at home and the stock market is doing well, who knew?

Now, it’s hard to sustain that kind of growth, and in 2022, the Times' growth slowed slightly. But it hasn't slowed too much, and I’d bet that The Boston Globe, the Los Angeles Times, and everyone else are likely to copy the no-free-articles system in the next few years (unfortunately for me).

## If cookies weren’t Big Brother enough for you, don’t worry, there’s always IP addresses
Okay cool, so we’ve seen how companies can work around the cookies-don’t-really-work problem.

Streaming services have a slightly different problem. They’ve already done what the Times has done, requiring you to subscribe before you can view their content. But human beings are conniving things, and they quickly figured out a low-tech way to get around having to pay: password sharing.

I’m sure the Times has suffered from lots of password sharing over the years, but they probably don’t have the money to address it. Netflix, on the other hand, has an unlimited R&D budget, and they recently caught on to how much money they’re losing to password sharing: “In addition to our 222m paying households, we estimate that Netflix is being shared with over 100m additional households,” they wrote in their 2022 Q1 annual shareholder letter. 100 million households is a lot of lost money; if we assume that Netflix makes around $11 per customer, that means they’re losing out on $1.1 billion per month.

So Netflix decided to crack down on password sharing, and they decided to do it using the concept of "households". Households cannot share accounts, they decided, and Netflix identifies a “household” as one IP address.

Before I talk too much more about Netflix, I want to explain how IP addresses work, because I think it's key to understanding Netflix's attempted solution.

In a nutshell: when you set up Wifi in your house, some guy from Verizon comes to your house and sets up a router. That router connects to the worldwide internet, and voila!, you have internet access. What you may or may not realize is that this router adds an “address” for your house to the public internet. This “address”, also known as an IP address, works the same way your home address works: people can send mail to your IP address. (But instead of people sending mail, it’s usually computers sending messages.)

Netflix has decided that no two IP addresses can be logged into the same account at the same time:

![](/images/posts/ip_address.png "IP address")
*My artistic attempt at describing what a household with two IP addresses looks like.*

Netflix tested this "household" definition in 2022 in South America, and the results were promising enough that they decided to roll out the IP-based household solution in America in Q1 2023. Just last month, they added a footnote that explains “Only people who live with you may use your account” to the Netflix sign up page for users in the United States:

![](/images/posts/netflix_one_household.png "IP address")
*Ominous…*

## Too lazy to fake my IP address
Now, it should be stated that it’s possible to fake your IP – one popular option is to use a VPN, for example – so many people could use a VPN and pretend to be one household. But Netflix has started cracking down on VPNs, and I'm too lazy to play cat and mouse with Netflix, especially when their cheapest subscription is only $6.99/month. Cheaper than Hulu and HBOMax!

## In conclusion
Thank you for reading 1,000+ words on how to circumvent paywalls. You may be wondering why this matters. I think we can all agree that websites have the right to charge money for their services. And most of us can simultaneously admit that it’s understandable to want to share an article or two with a non-subscriber, even if it means using paywall evasion tactics.

But why do we live in a world where it's impossible to share content online? Why can’t my Times subscription allow me access to the Post, or my Netflix subscription allow me to watch a few episodes of HBO Max? Instead, internet content has only bifurcated over time, with TV companies creating their own online subscription services to compete with Netflix, and more and more news websites adding paywalls of their own. In the pre-internet age, we had to share articles by clipping them and sending them via snail mail; it feels like with all the technological innovation we’ve seen in the past decade, we’re right back where we were in the first place.
