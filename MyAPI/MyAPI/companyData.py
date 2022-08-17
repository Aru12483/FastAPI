from re import I, L
from typing import List
#from fastapi import Depends, FastAPI, HTTPException,Request
from sqlalchemy import delete,distinct,func
from sqlalchemy.orm import Session
import  algo_inference
import db_handler
import algo_inference, algo_details
from sqlalchemy import and_, or_, not_, extract
from db_handler import Session_Local
import algo_inference as algo_infrence
algo_inference.Base.metadata.create_all(bind=db_handler.db_engine)
def monthly_count (algo,year,month):

    db = db_handler.Session_Local() 
    m_count = [0,0,0,0,0,0,0,0,0,0,0,0]
    query = db.query(algo_details.AlgoDetails.created_on, #i
    algo_infrence.Details.algo_id, #j
    algo_details.AlgoDetails.status, #k
    func.count(algo_details.AlgoDetails.status), #l
    algo_details.AlgoDetails.algo_name).join(algo_details.AlgoDetails, #m
    algo_infrence.Details.algo_id == algo_details.AlgoDetails.algo_id
    ).filter(and_(algo_details.AlgoDetails.algo_name == algo),
    (extract('month', algo_infrence.Details.created_on) == month), 
    (extract('year', algo_infrence.Details.created_on) == year)
    ).group_by(algo_infrence.Details.algo_id,algo_details.AlgoDetails.status).all()
    for i,j,k,l,m in query:
        if k == "true" or k == "success":
            m_count[i.month -1]=l          
    #print(m_count)
    return m_count
 
def daily_count(algo,year,month,day):
    db = db_handler.Session_Local() 
    d_count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    query = db.query(algo_details.AlgoDetails.created_on, #i
    algo_infrence.Details.algo_id, #j
    algo_details.AlgoDetails.status, #k
    func.count(algo_details.AlgoDetails.status), #l
    algo_details.AlgoDetails.algo_name).join(algo_details.AlgoDetails, #m
    algo_infrence.Details.algo_id == algo_details.AlgoDetails.algo_id
    ).filter(and_(algo_details.AlgoDetails.algo_name == algo),
    (extract('year', algo_infrence.Details.created_on) == year),
    (extract('month', algo_infrence.Details.created_on) == month), 
    (extract('day', algo_infrence.Details.created_on) != day)
    ).group_by(algo_infrence.Details.algo_id,algo_details.AlgoDetails.status).all()
    for i,j,k,l,m in query:
        # print (type(i))
        if k =="true" or k=="success":
            d_count[i.day - 1] = l
    print(d_count)
    return d_count