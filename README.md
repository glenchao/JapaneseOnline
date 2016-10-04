# Learn-Japanese-Online

Learn Japanese Online is a website that allows language learners to learn anytime, anywhere, on their cellphones.

## Table of Contents
- Quick Start
- Folder Structure
- What's Included
- Dependencies
- Creators
- References
- Copyright and License

## Quick Start

To start using this repository

>  ```> $ git clone https://github.com/wernerchao/Learn-Japanese-Online.git```

Website demo:

(https://project-3373896903953203314.firebaseapp.com)

## Folder Structure

Within the download you'll find the following directories and files:

```
my-app/
├── README.md
├── build/
├── node_modules/
├── package.json
├── public/
  ├── index.html
  ├── favicon.ico
├── src/
  ├── App.css
  ├── App.js
  ├── App.test.js
  ├── index.js
  ├── logo.svg
  ├── components/
  ├── images/
  ├── models/
  ├── pages/
  ├── stores/
  ├── utilities/
```

You will mostly be building the files in ./src, please do not edit any files other than the ./src folder

## What's Included

These are the re-usable components:

```
./src/components/
├── footer.js
├── header.js
├── homeHeader.js
├── infoForm.js
├── loginNav.js
├── teacher.js
├── timeList.js
```

## Usage
1. Please start out by looking at index.js for the overall linking of pages. The main functionality is on the page:

```
/admin/schedule
```

Where teahcers can update their schedules for student to book.
Teacher's schedule is then displayed on the page:

/admin/book

2. By default, when a user signs up on the page:

```
/login
```

It is considered as a student account.

3. This website uses Firebase as backend. Please check:

```
src/stores/init.js
```

for the Firebase database access.

## Dependencies
This website is built on react JS. It uses the following open source libraries and components:
- react-bootstrap
- react-infinite-calender
- react-router
- momentjs
- Firebase

## Creators

**Werner Chao**

- <https://github.com/wernerchao>

## References

We've used the following open source library to make this project:
(https://github.com/wernerchao/ud036_StarterCode) 

## Copyright and License

Code and documentation copyright 2016 the Project Movie Trailer
Authors and released under the MIT license.

