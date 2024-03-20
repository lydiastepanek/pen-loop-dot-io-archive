---
title: "Starting Over"
image: "/images/posts/sunrise.jpg"
date: 2024-02-02T16:56:47+06:00
draft: false
authors: ["Lydia Stepanek"]
tags: ["reflection", "anti-phishing", "startup", "product hunt"]
categories: ["entrepreneurship"]
---

I’ve said it once and I’ll say it again: I’m really proud of my most recent app, Too Phishy. It’s by far the best anti-phishing add-on I’ve seen in the Google Workspace store. That being said, it hasn’t caught on as much as I would have hoped or as fast as I would have hoped. 

In an [effort](/im-building-12-cybersecurity-startups-in-12-months) to build one app per month, I have to be more ruthless than other app builders in terms of timing. Things have to take off fast, or it’s time to pivot. So I’ve decided to pivot into new ventures. Here’s my blog post explaining why.

## Too Phishy’s launch
A few weeks ago, [Too Phishy](https://workspace.google.com/marketplace/app/too_phishy/802749066565) launched on Product Hunt. In its first few days, it got no page clicks. No subscribers. No comments. No reviews on Product Hunt (except, as usual, from my dad). And no downloads in Google Workspace. Admittedly, with my marketing budget of $0, I had told no one about this app, and Product Hunt doesn’t market your apps for you. But it was disheartening nonetheless.

![](/images/posts/from_dad.png "from dad")
<center>From dad</center>

I spent the next three weeks reaching out to bloggers, trying to get signups. I even posted to 19 reddit communities, earning me more than a thousand website visits to toophishy.com. Along the way, I managed to get 12 free trial users -- nothing to scoff at, but not enough to make a living off of.

Looking more critically, I had to wonder why my website had such a low ratio of website visits to app signups. My posts on reddit were getting real attention, but somehow my app did not address enough of a real problem to get people to sign up.

![](/images/posts/422_views.png "422 views")
<center>I got 472 page views from this reddit post alone.</center>

By the end of December, six of those trial users churned, leaving 6 who became paid users. I had to accept two things: I had 50% turnover, and I gained 1 user for every 3 days of marketing. Ultimately, I wondered if the time investment per user acquisition was sustainable. It was time to take a pause and figure out what to do.

First, in an effort to remove the most obvious friction point of user acquisition – cost – I decided to make Too Phishy free. I sent the following email to my users:

![](/images/posts/email.png "email")
<center>This was one of the hardest emails I’ve ever written. Goodbye, subscription income. Hello, more work.</center>

Then I emailed 93 cybersecurity practitioners across the world, telling them about my [5-star](https://workspace.google.com/marketplace/app/too_phishy/802749066565) free anti-phishing app and asking if I could speak to them for advice. (I got 5 meetings out of this outreach, but most practitioners I spoke to already had an anti-phishing tool in place and preferred to spend their budget on post-breach response rather than pre-breach defense.)

As Yvon Chouinard, the founder of Patagonia, once said:

> If I get an idea, I immediately take a step forward and see how that feels. If it feels good, I take another. If it feels bad, I take a step back.

At this point, I felt bad.

An object in motion stays in motion, which is to say, it’s sometimes easier to keep going than to stop.

So instead of diving into my next app right away, I’ve decided to take a pause, write this blog post about what I learned, and start over.

## The elephant in the room: big data
I mentioned this in my launch [post](/i-built-an-anti-phishing-app-heres-what-i-learned-and-why-i-hate-stripe) about Too Phishy, but there is a dearth of example phishing emails in the public domain. This makes it really, really hard to come up with correct algorithms, and to identify “bad actors” in real time. Without the ability to see the millions of phishing emails making their way across the internet and into Gmail’s inboxes, it’s hard to immediately flag bad actors. So in the end, I wonder if my biggest issue was not having enough email data to work with. This is the biggest lesson I take away from this experience.

## Things I got right
First, I’d like to reflect on what went well in the Too Phishy launch. I learned a ton.

Things I learned:

* Hey, I launched an app! That was exciting. And it got approved by the Google Workspace Review team (which took a month of back and forth).
* I found a paying audience – 12 free trial users! That’s way better than zero free trial users.
* And I found a non-paying audience - 30 users.

Things I got wrong:

* I launched a relatively expensive ($6/month) subscription app on a platform (Product Hunt) that doesn’t specialize in paid apps.
* Somehow I built an app that people wanted to learn about but didn’t want to install.
* I didn’t research the customer for my product before building.
* I built in a vacuum without talking to people along the way, compounding my above missteps.
 
So what am I planning on doing going forward? Let’s dive into it.

## Know thy customer
As someone who was very social in college, I joined my first software engineering job at the age of 25 and soon realized that my social skills learned in college did not translate to the startup world. I vividly remember my first day on the job, when all the male software engineers (and one product manager) walked by my desk on the way to lunch without acknowledging me. *I’ll show them*, I thought, *I’ll learn to code so well that they invite me to lunch.* Well, I did learn a lot of code, and eventually I got invited to lunch. But I turned down the invite. By then, I had fully transitioned into an introvert.

These days, I feel very comfortable around a compiler and a debugger, but I’m terrified to go to Meetup events. (If you’re wondering how I managed to spam 19 reddit communities as an “introvert,” I have the sweat stains to prove how difficult that was for me.) Hell, I’m scared to even send a single LinkedIn message.

So over the past few weeks, I’ve forced my rusty social skills into shape. I’ve gone to two (count ‘em) Meetups, and I’ve forced myself to talk about my product ideas to one new person at each event. And, as mentioned above, I’ve sent 93 Linkedin messages this month – mostly with my eyes closed, and hyperventilating while doing it. (Don’t block me, please.)

In an effort to be a woman of the people, and not just a cyborg working remotely in rural Brooklyn, I even went to Rockefeller Center and interviewed tourists on the sidewalk outside of an Equinox. “I’m starting a cybersecurity TikTok,” I told them, “Would you mind if I asked you a few questions about cybersecurity?” (Most people took pity on me because I do not look like a TikToker.)

“Do you ever worry about your data on Tiktok being used?” I asked.

“No,” they said.

“Do you ever worry about being hacked?”

“Yes.”

“Do you use a password manager and/or VPN?”

Some of them said that they had VPNs, not because of privacy concerns, but for watching Netflix abroad.

“Do you do anything to protect yourself from phishing emails?”

“Yes, but only for my work email.”

Hm. *That’s interesting,* I thought. *None of these people even uses a phishing app for their personal email.* (To you, this may seem very obvious; to me, it was genuinely a surprise. Again, I do not talk to people very often.)

*Who is my customer?* I wondered. *And what do they want?* The truth was, I didn’t even know.

I had 30 customers, so someone clearly wanted my app, but I didn’t know yet how to translate that into a profitable app.

## Conduct market validation
Not only had I been avoiding people for many years; I’d also been avoiding conducting market research. Most advice on the internet seems to be “build the app that *you* want!” Well, I’m a strange person. I’m not sure the world wants the apps that I want.

To figure out what the world wants, I realized I should probably do this thing called “market research.” So I signed in to Google Keyword Planner to see how often people search for terms relating to my app ideas.

My search revealed that only 50 people in the world search for the term "phishing gmail" every month. In comparison, 500 people search for “free parking app,” which explains why there are so many successful parking apps.

![](/images/posts/keyword_search.png "keyword search")
<center>An anti-phishing add-on for Gmail was not what the world was searching for.</center>

Again, many people probably do want a phishing plugin, but it’s useful for me to quantify how many people want a phishing plugin versus a free parking app, so that I can spend my time most productively.

## Launch on paid platforms
Right after my Product Hunt launch, I called up my friend Bosen, an indie game developer, and cried (metaphorically) about how few paid users I had. “Of course you’re not making any money,” he told me, “You launched on Product Hunt!” He pointed out that Product Hunt apps rarely charge money, whereas iPhone and Android apps can charge money and still go viral. The iPhone Store, the Google Play Store, and Steam platforms all market your apps for you by sending out marketing emails and making your app searchable. (They want their 30% cut after all.)

![](/images/posts/steam.png "steam")
<center>Steam even has a revenue calculator that helps you estimate how much a game makes. A simple game priced at $14.99 with 1,540 reviews can make $245k in one year. Product Hunt, tellingly, does not provide a revenue calculator tool, since most of the apps that it launches are free.</center>

## Make a free tier if you want to go viral
I charged $6/month for Too Phishy because I was following the advice of Marc Andreessen, who said that startup founders always charge too little for their products. And as mentioned above, you can make real money selling apps. But free versions are what go viral. Because, shocker: a small team can’t afford a full time sales team, let alone one sales person, so Product Hunt and Twitter clicks are their only way to market an app. For example, Instagram and Calendly, both launched by tiny teams, started as free apps.

## Then how will I make money?
I’m not trying to be a billionaire here, but I need to pay rent. I’ve spent the past few months trying to figure out how I can survive as an indie app developer.

Eventually, I came to a fairly obvious conclusion. No, not getting a real job – life is too short for that – but becoming a freelance cybersecurity consultant and web developer.

Funny story: a week ago, I added “CEO” to my Linkedin title (mostly inspired by my sister, an incredible startup founder). The second I did, I started getting tons of inbound messages from other executives on Linkedin. In fact, from that Linkedin interest, I set up a few calls, and I already have my first client! So my plan is to spend 20 hours per week consulting, and the other 20 hours building products. Plus, this way, I’ll be able to find people with actual problems that I can build products for.

## Conclusion
To sell my apps going forward, I’m going to have to talk to people a lot more (and having consulting clients should definitely help). I’m going to have to find customers before I build. And I’m going to need to ask other developers for ideas and feedback. With a new system in place – that is, focusing more heavily on early market research and customer feedback – I’m actually excited to start building researching my next product. First stop, Reddit.

## 🌟 Acknowledgements
I’d like to give credit to Lior Neu-ner’s great [blog post](https://liorn.substack.com/p/starting-over) that inspired me to start over.

