---
title: "Launching Too Phishy"
image: "/images/posts/sony.png"
date: 2023-11-11T16:56:47+06:00
draft: false
authors: ["Lydia Stepanek"]
tags: ["too phishy", "anti-phishing", "Google Workspace addon"]
categories: ["entrepreneurship"]
---

*Note: After reading this post, you may want to read my follow up to this blog post, [Starting Over](/starting-over), which explains why I've open sourced Too Phishy and made it free.*

To reduce procrastination and become faster at launching my projects, I’ve set the [goal](/im-building-12-cybersecurity-startups-in-12-months) to launch 12 cybersecurity startups in 12 months. A few weeks after every launch, I do a debriefing on what I learned. Yesterday, I launched my third project, [Too Phishy](https://workspace.google.com/marketplace/app/too_phishy/802749066565), an anti-phishing Gmail add-on.

I created Too Phishy to improve my ability to detect cleverly made phishing scams. I needed a tool — one that was easy and intuitive — to help when my better judgement wasn't enough.

## 🌪️ Wait, didn’t I already launch a product called Is This Phishy? What happened to that?
Despite boasting 400 monthly active users in its first two months, my first project, [Is This Phishy](https://isthisphishy.io/), saw its active user base drop down to one by its third month. (Hi dad!)

![](/images/posts/funeral.jpg "funeral")
<div class="image-caption">Please bow your heads for a moment of silence.</div>

It turns out that recognizing phishing emails is really hard.

Too Phishy endeavors to be an improvement on Is This Phishy, using the lessons learned from Is This Phishy to provide better email analysis.

For example, Is This Phishy told you that an attachment might be suspicious, but it didn’t show you that someone named John Delacroix last edited the attachment. Similarly, Is This Phishy told you that an email contained a rarely seen link, but it didn’t show you that the link was hosted in Korea.

![](/images/posts/sony.png "sony hack")
<div class="image-caption">Check out my terrible attempts at writing funny marketing copy at toophishy.com/how-it-works.</div>

In short: Is This Phishy showed you beige flags; Too Phishy shows you red flags.

Also, I want to be funny with Too Phishy. Humor is a big part of my life and Is This Phishy was a little boring. Who says we can’t have a little fun while making sure someone hasn't stolen those 9 golden SSN digits?

## 🔮 So if Too Phishy is super fast, and super awesome, it must use AI, right?
Well, no. Too Phishy uses human-defined rules (defined by me) to analyze the two vectors of attack contained in an email: links and attachments. Building an AI — specifically an LLM model like OpenAI — requires millions (or billions) of data points from which a machine can learn, so building an AI model for recognizing phishing would take millions of phishing emails. Currently, there isn’t a big enough corpus of example phishing emails in the public domain to build such a model [1].

I'm planning to build a corpus of phishing emails with the aim of developing my own LLM. Right now I'm brainstorming the best way to achieve this — potentially incorporating this into the rollout and growth of Too Phishy itself. (Maybe I should offer a free month of Too Phishy for every phishing example sent to support@toophishy.com? Ideas are welcome.)

Either way, I’m really proud of the human-defined model I created for Two Phishy: it is the only email plugin I’ve seen that shows you so much information in so little time, and lets YOU see all the hidden metadata in your emails that email providers hide from you.

## I’d like to thank the Academy and ChatGPT for not helping.
ChatGPT is really useful, it turns out (who knew??)…for really specific coding questions. Like: *How do i run the "node-exiftool" library on a Gmail email attachment in NodeJS?* Or, *What are the allowable values for memory in an ECS task definition?* Those questions yielded me perfect cut-and-paste answers.

But if you need help with high level questions like which technology to use for a given problem, look elsewhere.

I asked ChatGPT, *How do I get my Stripe app to use HTTPS?* It told me to sign up for Stripe Enterprise and use their partner solutions team (a.k.a. paid consultants). I’m an indiepreneur eating reheated quinoa for the fourth day in a row – I don’t have that kind of money.

Next: *Is there an easy way to set up a Stripe payments site?* Answer: “Why yes! Use Wix or WooCommerce for WordPress!” Again, I’m flying economy here, why does ChatGPT keep asking me if I want more champagne.

(I ended up building a Stripe payments React app from scratch and hosting it in Amazon ECS. And it still costs me $76.44/month to run, which was more than I anticipated spending [2]. So maybe ChatGPT had the last laugh here.)

Worst of all was asking ChatGPT for help writing a Gmail add-on because – surprise! – there’s hardly any information online about building Gmail add-ons. Asking ChatGPT questions like *What does a google workspace addon mainfest file look like for Gmail?* yielded completely nonsense answers. Without the help of cutting-edge AI, I used the second-best scientific approach known to man – that is, typing hundreds of random lines of code until one of them worked – which eventually yielded results (and a lot of swear words on my end).

## Also, I hate Stripe's documentation
Whenever I interview with a startup (for when I imminently run out of savings, or until my secret trust fund finally materializes…), they say “we’re the Stripe of home delivery” or “we’re the Stripe of dog food.”  In other words, Stripe is the gold standard of startups.

However, once you start building a website that uses Stripe payments, you quickly realize that Stripe’s docs are famously chaotic, a result of building lots of features over the years and not updating their docs accordingly. For example, it took me an entire week to turn my payments form (yes, one form) from the one shown below to a more modern design because Stripe hasn’t yet written documentation for their new checkout page React component:

![](/images/posts/checkout_before.png "checkout before")
<div class="image-caption">Before</div>

![](/images/posts/checkout_after.png "checkout after")
<div class="image-caption">One week and fourteen gray hairs later, tada!</div>  

## Google Marketplace's App Approval Process
I know that the app approval process for Apple can take months (although they claim it’s now down to a day). But I’d never developed a Google add-on before, so I was curious how long it would take to get my app reviewed and approved by Google.

In the end, Google rejected my add-on six times before finally approving it 27 days later.

## 🏷️ Why I’m Charging $6/month 
As I ate microwaveable quinoa for the seventh time this week, I made the decision to price my app at $6/month.

At first, I had decided to price Too Phishy at a low price point in order to attract as many users as possible, so that I could build the AI model of my dreams. $1/month seemed reasonable to me, and would make Too Phishy a steal when compared to Gmail’s other add-on offerings, which go for [$3](https://workspace.google.com/marketplace/app/gqueues_for_google_workspace/672546833824) to [$10](https://workspace.google.com/marketplace/app/social_insights_for_gmail/398227766523) a pop per month. But then I read [this](https://www.mimiran.com/raise-prices-marc-andressen-says-you-should) advice from Marc Andreessen:

> The number one thing – just the theme and we see it everywhere – the number one theme with our companies have when they get really struggling is they are not charging enough for their product.

![](/images/posts/raise_prices.png "raise prices")
<div class="image-caption">I listened, Marc.</div>

## 🌟 Acknowledgements
I’d like to thank Aixsha, my college suitemate, who was generous enough to share her enormous corpus of phishing emails with me (while she was under constant attack from some crazy people who hate WGA members), which I used as a basis as my phishing corpus for Too Phishy. Up until very recently, Aixsha was in the middle of experiencing constant phishing attacks while she was on strike. But don’t feel too bad for her – she’s getting vengeance on her attackers as we speak by writing a television pilot about it.

I’d also like to thank my friends Mona and David who also contributed their phishing emails.

## 🥿 Footnotes
[1] There are some older, oft-researched phishing email corpuses – like [this](https://www.cs.cmu.edu/~enron/) 2004 Enron email corpus and [this](https://www.kaggle.com/datasets/rtatman/fraudulent-email-corpus) 1998-2007 "Nigerian” fraud email corpus – but they’re pretty out of date. Since phishing emails are changing from day to day, these corpuses from the mid-2000s aren’t very useful.

[2] Funnily enough, I just listened to an [interview](https://ma.tt/2022/03/guy-razs-how-i-built-this) with the founder of Wordpress and learned that it cost him $99/month to run the original Wordpress server back in 2005. 18 years later, my costs are pretty much the same for compute power. (The more we evolve, the more we stay the same, yadda yadda…)
