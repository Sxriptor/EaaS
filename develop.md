Eventually-as-a-Service (EaAS)
Overview

Build a deliberately minimal web page that does almost nothing.

The product is a joke.
The joke is the product.

Core Behavior

One public webpage

One button

One response

That’s it.

UI Requirements

Dark background

Centered content (vertically + horizontally)

System font (no custom fonts)

Elements

Primary button

Text:

“This will exist eventually.”

Result area

Hidden by default

Revealed after button click

Interaction Logic

When the button is clicked:

Display the message:

“Still not yet.”

Display how long the product has been “in development”

Time elapsed since a fixed start date

Format example:

In development for 2,873 days, 4 hours.

Start Date

Hardcoded date in the past

Example:

2016-04-01T00:00:00Z


This date must never change.

Technical Constraints

Static site only

No backend

No database

No analytics

No cookies

No authentication

No tracking

No environment variables

Hosting

Must be deployable as a single static page

Compatible with:

GitHub Pages

Netlify

Vercel

Local file system

Out of Scope (Do NOT add)

Payments

Accounts

Roadmap

Signup forms

Multiple pages

Marketing copy beyond the button

Easter eggs

Animations

Tooltips

If it feels like a “feature,” it’s out of scope.

Success Criteria

Page loads instantly

Button works

Time increases correctly

No errors

Nothing else happens

Product Philosophy (Read This)

This project must feel:

Dry

Pointless

Finished

If the implementation feels “clever,” it’s wrong.

Deliverables

index.html

Optional: README.md with one sentence:

“It’s been in development for a while.”