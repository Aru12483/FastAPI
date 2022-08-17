
from sqlalchemy.sql import func
from sqlalchemy import Boolean, Column, Integer, String, DateTime, Text
from db_handler import Base
import datetime

class Details(Base):

    __tablename__ = "algo_inference"
    id = Column(Integer, primary_key=True, autoincrement=True, index=True, nullable=False)
    job_id = Column(String(255), unique=True, index=True, nullable=False)
    send_ip = Column(String(255), index=True, nullable=False)
    study_id = Column(String(255), index=True, nullable=False)
    algo_id = Column(String(255), index=True, nullable=False)
    hid = Column(String(255), nullable=False)
    payload = Column(Text(4294000000))
    path = Column(String(255))
    flag = Column(String(255), index=True)
    #status = Column(String(255), index=True)
    #message = Column(String(255))
    #instance_count = Column(String(255))
    created_on = Column(DateTime(timezone=True), default=datetime.datetime.utcnow)
    updated_on = Column(DateTime(timezone=True), default=datetime.datetime.utcnow)