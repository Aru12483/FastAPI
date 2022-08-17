from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
DATABASE_URL = 'mysql+pymysql://root:aryaman12483!@localhost:8000/gateway'

db_engine =  create_engine(DATABASE_URL)
Session_Local =  sessionmaker(autocommit=False, autoflush=False, bind=db_engine)

Base = declarative_base()