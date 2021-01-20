# Django

A web development framework that has strict recommendations for where and how the code should be arranged. Strongly recommended for python applications that requires stability, scaling and extensibility.


## Content

- [Content](#content)
- [About](#about)
- [Using the application](#using-the-application)
- [Concepts](#concepts)
- [Project vs App](#project-vs-app)
  - [Config](#config)
  - [Subcomponents](#subcomponents)
  - [Strong Decoupling](#strong-decoupling)
  - [Testing](#testing)
- [Additional Notes](#additional-notes)
  - [Resources](#resources)
## About

This code was developed from a walkthrough from

- [this tutorial chain](https://docs.djangoproject.com/en/3.1/intro/tutorial01/). 
- [reusable app tutorial](https://docs.djangoproject.com/en/3.1/intro/reusable-apps/)

## Using the application

These are the rough steps to get the application running. If there are missing steps, look into the django tutorial for hints of how to overcome the errors.

1. create a python environment
2. install django
3. cd into django-polls
4. create the python package and install it
   1. `python setup.py sdist`
   2. `pip install --user django-polls/dist/django-polls-0.1.tar.gz`
5. cd into `django/mysite`
6. setup the database
   1. `python manage.py makemigrations`
   2. `python manage.py migrate`
7. create a superuser `python manage.py createsuperuser`
8. Run the application `python manage.py runserver`

## Concepts

Django encourages certain concepts which were covered within the tutorial.

## Project vs App

Django projects houses multiple apps to serve a website. An App serves a specific function like polling. An App can be in multiple projects and a project can have multiple apps.
### Config

Django utilises configuration files to manage and install subcomponents. For example, switching from sqlite to other databases will involve a change in the `django/mysite/mysite/settings.py`. This same file will also control the applications installed and that is the way you are encouraged to create web applications within django.

### Subcomponents

django-polls is created as a standalone python package that can be easily installed using pip. To do this, the django-polls app contains all the required components like html, css and database instructions. This can then be called as an app within `django/mysite/mysite`.

To create this application, there will be a need to create

- MANIFEST.in
- readme.rst
- setup.cfg
- setup.py

Afterwhich you should run the following commands

```bash
# make sure you are in django/django-polls
python setup.py sdist
pip install --user django-polls/dist/django-polls-0.1.tar.gz
```

### Strong Decoupling

URLs defined within `urls.py` can be called from other areas within the application. Therefore, url routing's role can be mainly controlled by the `urls.py` making it more manageable.

For Example: If you need to hyperlink from one page to another.

```html
<li><a href="{% url 'polls:detail' question.id %}">placeholdertext</a></li>
```

`polls:detail` will refer to the url specified under the **polls application** and the **detail path**.

### Testing

There is no escape from testing and django has made testing simpler with its setup as there will be `tests.py` created under the applications. 

Run the tests using

```
python manage.py test <app-name>
python manage.py test polls
```

## Additional Notes
### Resources

Cat gif was downloaded from [here](https://giphy.com/gifs/download-IRFQYGCokErS0)