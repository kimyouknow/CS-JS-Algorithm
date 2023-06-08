# SQL과 NOSQL

RDB(관계형 데이터베이스)를 RDBMS(데이터베이스를 관리)로 생성하고 수정하고 관리한다.
SQL은 RDBMS를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어이고,
NOSQL(비관계형 데이터베이스)는 RDB 형태의 관계형 데이터베이스가 아닌 다른 형태의 데이터 저장방식.

SQL은 Structured Query Language의 약자로, 관계형 데이터베이스 관리 시스템(RDBMS)에서 사용되는 데이터베이스를 의미합니다. NoSQL은 Not Only SQL의 약자로, 비관계형 데이터베이스를 의미합니다.

SQL과 NoSQL은 각각의 장단점이 있으며, 데이터의 구조와 용도에 따라 선택되어야 합니다. SQL은 정형화된 데이터 처리와 ACID 트랜잭션을 필요로 하는 경우에 적합하며, NoSQL은 비정형화된 데이터 처리와 대용량 데이터 처리, 분산 처리 등에 적합합니다.

## SQL

SQL은 테이블 형태로 데이터를 저장하며, 각 테이블은 열(column)과 행(row)으로 구성됩니다.

데이터의 구조가 미리 정의되어 있으며, 각 테이블은 관계를 가지고 연결될 수 있습니다.

SQL 데이터베이스는 ACID(원자성, 일관성, 고립성, 지속성) 트랜잭션을 지원하며, 데이터의 정합성을 보장할 수 있습니다.

대표적인 SQL 데이터베이스로는 MySQL, Oracle, SQL Server, PostgreSQL 등이 있습니다.

### 핵심 특징

관계형 데이터베이스에는 핵심적인 두 가지 특징이 있다.

데이터는 정해진 데이터 스키마에 따라 테이블에 저장된다.
데이터는 관계를 통해 여러 테이블에 분산된다.

데이터는 테이블에 레코드로 저장되는데, 각 테이블마다 명확하게 정의된 구조가 있다. 해당 구조는 필드의 이름과 데이터 유형으로 정의된다.

따라서 스키마를 준수하지 않은 레코드는 테이블에 추가할 수 없다. 즉, 스키마를 수정하지 않는 이상은 정해진 구조에 맞는 레코드만 추가가 가능한 것이 관계형 데이터베이스의 특징 중 하나다.

또한, 데이터의 중복을 피하기 위해 '관계'를 이용한다.

## NOSQL

NoSQL은 스키마가 없거나 동적으로 정의될 수 있으며, 관계를 가지지 않는 데이터를 저장합니다. 다양한 데이터 모델을 지원하며, 확장성이 뛰어나고 분산 처리가 가능합니다. NoSQL 데이터베이스는 ACID보다는 BASE(기본 가용성, 소프트 상태, 확장성) 모델을 따르며, 높은 가용성과 성능을 보장합니다. 대표적인 NoSQL 데이터베이스로는 MongoDB, Cassandra, Couchbase, Redis 등이 있습니다.

## 참고 자료

- https://github.com/gyoogle/tech-interview-for-developer/blob/master/Computer%20Science/Database/SQL과%20NOSQL의%20차이.md
- https://github.com/Seogeurim/CS-study/tree/main/contents/database
- https://www.integrate.io/ko/blog/sql-vs-nosql-5-critical-differences-ko/
- https://im-designloper.tistory.com/67
