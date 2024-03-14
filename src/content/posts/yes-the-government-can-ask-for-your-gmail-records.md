---
title: "Yes, the FBI can use your Google search records to convict you. And so can Google."
description: "Until recently, I didn’t realize that police could use my Google search history to convict me of a crime."
date: 2022-10-03T05:00:00Z
image: "/images/posts/01.jpg"
categories: ["cybersecurity"]
authors: ["Lydia Stepanek"]
tags: ["cybersecurity"]
draft: false
---

Until recently, I didn’t realize that police could use my Google search history to convict me of a crime. I also didn’t realize that Google itself can use my search history to sue me. This post is about my slow wake up call to the Big Brother world of Big Data.

As a United States citizen, I know how search warrants work: the police can enter my home and search through my personal belongings if they have probable cause. But in terms of my internet browsing history, I've always assumed that the data I create is so vast that it was untraceable. Really, who’s going to record the 500 celebrity gossip pages I visit per day? (And which government agency actually cares enough to store that information?) I know, call me naive, but logging onto a computer and visiting different pages of the internet felt sacred to me.

Alas, the government subpoenas large tech companies to access our search histories all the time. Don’t believe me? Look no further than the 2012 LinkedIn hack, the hack that taught me how far the FBI's tendrils extend.

## How the FBI finds hackers using search warrants

If you, like me, got a password reset notice from LinkedIn circa 2012, then you may already know about the LinkedIn hack of 2012. In it, a Russian hacker named Yevgeniy Nikulin stole 6.5 million LinkedIn users’ email addresses, usernames, and password hashes, and then used those credentials to hack into other companies like Dropbox (from whom he stole 20 million users' passwords) and Formspring (from whom he stole 420,000 users' data).

But no matter how many databases Nikulin hacked into, he was never going to have as much data about LinkedIn users as the FBI had about him. After the hack, the FBI spent four years collecting Nikulin's online data so that they could charge him for identity theft and computer intrusion. First, the FBI traced the original hack to the email address r00talka@gmail.com. Next, they asked Google for the search history associated with r00talka@gmail.com – unsurprisingly, Google gave them everything from his search history, even searches for a dentist near Moscow. And it wasn't just Google that complied with the warrant. Microsoft, Vimeo, Automattic (the parent company of Wordpress), and others contributed so many records that the trial brief, at 13 pages, was chock full of incriminating information.

## And yes, collecting this amount of data is normal for the FBI

The LinkedIn hack wasn’t a one-off in terms of the government using search warrants to chase down the online behavior of a high profile hacker: in the 2017 WannaCry hack, which shut down an estimated 230,000 computers worldwide, the FBI found the hacker by requesting all Gmail records associated with various email addresses used in the attack. The FBI again traced these email addresses back to Gmail accounts owned by a North Korean cybercriminal, and then indicted him.

## Enter:  The Fourth Amendment

In some ways, I’m okay with the government being able to retrieve information from Google in order to solve crimes. After all, the Fourth Amendment protects U.S. citizens unreasonable searches and seizures by the government. If the FBI wants someone's data, they probably have a good reason, right?

But I’m beginning to realize just how often government search warrants stretch the definition of "reasonable." Just a few months ago, police in Nebraska prosecuted a 17-year-old girl for getting an abortion, all using data acquired from Facebook through search warrants. And how did they get a search warrant for the girl’s Facebook message history? They told Facebook that they had evidence that she had burned and buried the baby (because they found the fetus discarded in a bag).

However, once the police read the Facebook messages, they realized that she had aborted the baby, not burned it, which changed the investigation from a murder investigation to an abortion investigation.

I am disturbed by Facebook's willingness to hand over the girl's records so readily. In fact, Facebook has stated publicly to the New York Times that, in the first half of 2020, it complied with 89% of  search warrants it received. By comparison, Apple only complied with 43%. (Google complies with 83%.)

## Tech companies also use their records to sue employees

Even more disturbing than tech companies handing over records so readily is the fact that they also use these records to sue their own employees.

In 2017, Waymo parent company Alphabet sued Waymo's competitor, Uber, for stealing their self-driving cars. Alphabet's two top self-driving car engineers, and that these engineers, prior to leaving Google, had "downloaded 9.7 GB of Waymo's confidential files and trade secrets, including blueprints, design files, and testing documentation." Alphabet, in its claim, showed that one of the engineers in question had googled things like "how to permanently delete google drive files from my computer."

If Google deems it necessary to publicize your search history (like if $245 million worth of AI car research is on the line), they will.

And for those of you who were reassured by Google’s new security policy that allows users to automatically delete all of their Google data – including search history – every 3 months, listen up. That policy only applies to things like Google search history, not Gmail emails themselves, which are still stored indefinitely, and which Google clearly hands over fairly freely. (See the aforementioned 83%.)

## Sleep tight!

My point is, for those of you – like me – who long thought that your personal data is sitting pretty in a data center, not being used by anyone, or only being used for ad targeting purposes, I just want you to know that it is being used by law enforcement on a regular basis. And, if you're a tech worker like me, potentially by your future employer. 
