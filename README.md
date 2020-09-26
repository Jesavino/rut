# RUT

A simple React and Django based webapp for viewing and modifying plant sensor data

## Backend

The backend is built using Django, and lives within the rut/ directory. 

## Frontend

Built using React with form components from reactstrap


## Running 

Clone down the repo

Install the requirements file within a virtual environment. I used `venv`, though likely cannot give more support than what is on their website. 

```
pip install -r requirements.txt
```

In a terminal, run 

```
pyhton rut/manage.py migrate
python rut/manage.py runserver
```

This should start the backend server. 

Then, in another terminal, run:

```
cd rut-frontend/
npm install
npm start
```
This should open a window in your browser of choice to the Rut app and you should be able to interact with app. Enjoy! 
