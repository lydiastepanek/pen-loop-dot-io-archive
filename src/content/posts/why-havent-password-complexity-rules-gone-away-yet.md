---
title: "Why haven't password complexity rules gone away yet?"
description: "I've long suspected that password complexity rules were invented by computers to torture us."
image: "/images/posts/NIST.jpg"
date: 2023-07-29T16:56:47+06:00
draft: false
authors: ["Lydia Stepanek"]
tags: ["Food", "Gold"]
categories: ["Food"]
---

I've long suspected that password complexity rules were invented by computers to torture us. So I investigated: does adding special characters make passwords safer? And if not, why do so many systems require it?

The short answer is a) no, and b) because of an accident of history.

The longer answer involves an obscure government agency, the passage of time, and the universal struggle to keep up with change.

## Does adding complexity to passwords stop hackers?
In theory, a hacker can write an automated program that will guess millions of passwords per second, so adding special characters to passwords makes them harder to guess.

But ever since the early 2010s, when reCAPTCHA (and other innovations like rate limiting and multi-factor authentication) spread onto almost every web login imaginable, password-guessing attacks became impossible, because hackers would quickly run into a login attempt wall. For a long time I’ve wondered why password complexity rules still exist nowadays [1]. So I decided to investigate.

## Who came up with these password rules anyway?
If you’ve ever spent time in Boulder, CO, with a dad who admires government agencies that set the time for the rest of the United States (just me?) then you should be familiar with the National Institute of Standards and Technology (NIST). The basis for NIST’s existence goes way back to 1781, when the Articles of Confederation determined that Congress had the power to determine standard weights and measurements. Since then, NIST has been responsible for setting measurements like the exact standard of temperature (0 °C = 32 °F).

![](/images/posts/NIST.jpg "Regina George")
*Up until 2014, all the clocks in the United States synchronized their time to NIST’s atomic clock in Boulder.*

In addition to measurements, NIST is also in charge of password guidelines for all U.S. government agencies. (Yes, I also found it astonishing that a government agency established in the 1700s now decides IT practices for the entire country.) All organizations that work with the federal government are required to adhere to NIST's guidelines in order to be considered for government contracts. NIST's influence has spread into the private sector too, where its guidelines are considered the gold standard by most IT practitioners.

NIST manager Bill Burr wrote SP 800-63: Electronic Authentication Guideline, the agency’s first authentication guidelines, in 2004, introducing password complexity rules to the world. Burr’s guiding theory behind complexity rules? If a password is easy for a user to remember, then it’s also easy for a hacker to guess:

> Passwords chosen by users probably roughly reflect the patterns and character frequency distributions of ordinary English text, and are chosen by users so that they can remember them. Experience teaches us that many users, left to choose their own passwords, will choose passwords that are easily guessed…
Composition rules… can eliminate many obvious choices and therefore we believe that they generally improve the “practical entropy” of passwords.

The idea follows a certain kind of logic…albeit one backed by zero evidence. “Much of what I did I now regret,” Burr told the WSJ in 2017. Burr hadn’t had time to test any of his theories on actual passwords, and administrators at NIST had refused his request to look at the actual passwords on their network for empirical purposes. In fact, “they were appalled [he] even asked.”

In the absence of any other guidelines to follow, government agencies and private companies alike followed Burr's advice. Even today, 45% of the 120 most popular websites still require complex passwords.

Empirical evidence, finally available in 2017, showed that complex character rules make passwords no less easy to guess. Per NIST document SP 800-63-3 (first published in 2017):

> Research has shown... that users respond in very predictable ways to the requirements imposed by composition rules. For example, a user that might have chosen “password” as their password would be relatively likely to choose “Password1” if required to include an uppercase letter and a number, or “Password1!” if a symbol is also required.
 
So adding a 1 or a ! to the end of your password isn’t going to make your password that much harder to guess. What will? It turns out that it’s far more effective to make passwords long than to make them complex:

![](/images/posts/xkcd.png "Regina George")
Source: xkcd

An 11-character password containing complex characters would take a computer 3 days to guess; a 25-character password containing no complex characters would take 550 years to guess. In a nutshell: long and simple passwords are better than short and complex passwords.

## Just how often does NIST change their password guidelines?
As I started reading these password guidelines documents, I became as fascinated by NIST as my dad, although my interest had less to do with time measurements than with the history of password guidelines.

Luckily for me, all of the password guidelines ever written by NIST are available online. (Kids, don’t let ChatGPT write your history papers. It told me that “NIST first recommended two factor auth” in 2006, but I already knew from the WSJ article that the first 2FA guidelines had been published in 2004.)

To make it easier for my future self to track these guideline changes over time (reading them wasn't thrilling enough) I made this table:

|Publication | Original publish date |Major changes |
| ------- |------- |------- |
| [SP 800-63](https://csrc.nist.gov/publications/detail/sp/800-63/archive/2004-09-27) |September 2004 (updated and re-published in April 2006)|1.) **Passwords should use irregular capitalization, special characters, and at least one numeral in their passwords.** 2.) For highest security, passwords should use MFA like biometric identification. 3.) Passwords should be changed at least every 90 days.        |
| [SP 800-63-1](https://csrc.nist.gov/publications/detail/sp/800-63/1/archive/2011-12-12) |December 2011|1.) Passwords should be at least 6 characters long.|
| [SP 800-63-2](https://csrc.nist.gov/publications/detail/sp/800-63/2/archive/2013-08-29) |August 2013|1.) Passwords should not be changed too frequently (i.e. every 90 days), as research had shown that frequent changes lead to weaker passwords. 2.) Passwords should be at least 8 characters long.|
| [SP 800-63-3](https://csrc.nist.gov/publications/detail/sp/800-63/3/archive/2017-06-22) |June 2017 (updated and re-published in March 2020)|**1.) Passwords should be made up of random words, and not be required to contain a mix of characters.** 2.) Organizations should encourage users to change their password if they suspect the password has been compromised. 3.) Login attempts should be subjected to rate-limiting.|
| [SP 800-63-4](https://pages.nist.gov/800-63-4/) |2023|Still seeking comments. Draft mode.|

![](/images/posts/one_direction.png "Regina George")
*NIST rules requiring 90-day resets and complex characters: not cool anymore. One Direction: still cool.*

On the other hand, guidelines that make intuitive sense, like MFA, which was first recommended by NIST in 2004, have stuck around for ages. Some types of MFA, like text-message codes, have turned out to be susceptible to various attacks like SIM swapping. But others, like MFA that relies on biometric data or physical security keys (both mentioned in NIST’s 2004 guidelines), have proven quite safe over time.

## Do companies keep up with these rule changes?
NIST’s tendency to change rules over time introduces an obvious problem: the rest of the world has trouble keeping up. ADP, the global HR company that managed payroll for my former employer, made me reset my password TEN times in four years.

![](/images/posts/adp.png "Regina George")
*My password to this website is “f*%!_ADP”.*

So I asked my friend Reba, who works in IT for the government, why so many websites remain out of compliance with NIST guidelines. She explained that many government agencies – and non-government agencies – don't have the time or money to follow NIST guidelines. “It’s a matter of not having enough budget to rebuild an agency's entire authentication system,” she says.

Since password rules change faster than organizations can afford to implement them, outdated rules are here to stay. So, for the foreseeable future, we'll just have to keep adding “N!ST” to the end of our passwords (...just me?).

## 🥿 Footnotes
[1] I recently learned that, even in a world where reCAPTCHA and MFA can stop password-guessing attacks on web logins, there is one type of hacker who still takes advantage of frequent password-guessing attacks: those who steal – or buy on the dark web – databases full of encrypted passwords. Once a hacker gets access to one of these databases, the first thing they do is perform password-guessing attacks on each encrypted password. (The attacks are slightly different because they're encrypting the guesses and then comparing the guesses against the encrypted values in the database, but the attack is still directionally the same as a web login attack.) It turns out that shorter passwords are easier to guess when encrypted too: an eight-character encrypted password bought on the dark web can be cracked in 48 minutes. That’s why password managers like Dashlane generate 16-character passwords by default. (Sign up for Dashlane, everyone! It's my favorite Chrome plugin by far.)
