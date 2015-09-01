WeFlex Product Development Guide
====

<!--
  Author: Scott Wang, Yorkie Liu
  Date:   2015/09/01
-->


Preface
----

This document is for WeFlex product team members, especially with enginnering
backgrounds. If you found any difficulty reading through it, please don't worry
and read [the next chapter](#for-non-product-team-members).


For Non-Product Team Members
----

If you came from a non-product background, go ahead and read how to
[write down your ideas](#write-dow-your-ideas). This should serve you a
picture about how to co-operate with the product team.

### Write Down Your Ideas

Any improvement of our product may starts as a very minimalistic sentense
describing vaguely about the improvement. It is product manager's job to
interview who came up with this idea and filling more details in it.

To begin with, you could go to
[Inbox board](https://trello.com/b/Z7EqW3eV/inbox) and under your list, add a
card simply describe your problem. For example, I (Scott) want to request a new
feature to improve our data analytics, so I went on Inbox and open a card:

```

.-------------------.  .------ ... (other lists)
|  Scott            |  |  Sean
| .---------------. |  |
| ' User behavior ' |  |
| ' analytics     ' |  |
| `---------------' |  |
| ... (other cards) |  |
|                   |  |

```



Product Tasks
----

**TL;DR**

Product development is never an easy job, yet we can always broke it down to
tasks, which involves different kind and levels.A product task could be either a
`new feature`, a `enhancement`, a `technical issue` or a `bug`.

All these tasks could be referenced as `improvement` in latter chapters.

### Bugs

> Bugs are not correctly implemented features.

Bugs are usually implementation problems. If some behavior is specified but not
executed as our expection, then probably you have found a bug.

If reporter is not coming from a technical background (i.e. he is not a
developer), ask the product manager to report the bug for you.  Bugs get
reported to github issues with detailed reports attached. In bug reports,
reporter should provide a detailed procedure to reproduce the bug.

#### Fixing bugs

Depending on how critical the bug is and how difficult to fix it, product
manager decides to fix it in either this cycle (aka. `hot fix`) or the next
one. It is also product manager's job to assign bugs to developers.

#### Merging bug fixes

Once fixed, assignee usually puts his/her clean fix in a single commit, leaving
a message about which bug this commit fixes and which Github issue this bug
associates. Then assignee submits his bug fix as a `pull request`, merging from
bug-fix branch to production branch. Assignee should always reference the bug
issue in pull request description and then assign this pull request to proper
developer, who either owning the repository, or working on it.

Each pull request requires at least one `LGTM` (looks good to me) or `SGTM`
(seems good to me) comment to pass and get merged.


### Technical Issues

> Technical issues are not fully designed features.

Technical issues are spec problems. If set of bahaviors are designed but what
happened in reality is not included, then probably you have found a technical
issue.

Technical issues get reported to github issues with a report attached. Like bug
reports, this report contains detailed information about how to reproduce the
missing scenarios. Product manager is responsible for distinguishing bugs and
technical issues and writing reports.

Technical issues applies same [fixing](#fixing-bugs) and
[merging](#merging-bug-fixes) strategies with bugs.


### Enhancements

> Enhancements are not properly designed features.

Enhancments are upcoming design problems. If a feature is designed but not in
appropriate form, then probably what you have found is a enchancement.

#### User stories for enhancements

Before [review days](#review-days), product manager is responsible doing

1. collect analytic data;
2. interview users;

to back up his (or someone else's) request of this enhancement.

He needs to reason why that

1. current design is not the best;
2. it worth time and money to do this improvement;

and compile them into a `user story` to help his co-workers to understand what
exact problem this enhancement is to solve.


#### Difference between enhancements and technical issues

The major difference between enhancements and technical issues is that
enhancements emphysis on _not properly designed_ while the latter one emphsis on
_not fully designed_.


### New Features

> Ah! A feature!

New features are usually new business problems. If a feature or function is
designed and implemented at all, then it probably be a new feature (to work on).

A feature requires a user story, similar to the
[enhanment one](#user-stories-for-enhancements).



Review Days
----

Review day is a meeting, hold at end of each cycle, to report and demo what
product team has achieved in last cycle and plan for the next one.


References
----

1. Richard White,
   [How we use trello & google docs to make UserVoice better every day](http://community.uservoice.com/blog/trello-google-docs-product-management/)

2. Stanislav Jonak,
   [Kanban for software development](http://wiretech.org/about-cloud/11-kanban-for-software-development)
