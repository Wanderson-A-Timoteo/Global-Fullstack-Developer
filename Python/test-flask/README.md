# Introduction to tests

Application developed in a bootcamp to *Digital Innovation One®* (https://digitalinnovation.one/). 
In this module was presents a introduction to tests in Flask applications.


## Install Requirements

$ pip install -r requirements.txt

## RUN Flask Application

$ export FLASK_APP=app.py  
$ flask run

## RUN Tests

$ py.test

## RUN Coverage

$ coverage run --source=app -m py.test  
$ coverage report -m   
$ coverage html
