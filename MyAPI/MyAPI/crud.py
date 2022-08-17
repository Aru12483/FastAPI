from sqlalchemy.orm import Session
import algo_inference
import schema 
from sqlalchemy import Boolean, Column, Integer, String, DateTime, Text

#fetching data from algo inference 
def get_data_job_id(db : Session, job_id: String):
    return db.query(algo_inference.AlgoDetails).filter(algo_inference.AlgoDetails.job_id == job_id).first()


