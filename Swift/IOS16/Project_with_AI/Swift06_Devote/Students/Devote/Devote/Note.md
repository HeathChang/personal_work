#  Today I Learn

## Core Data

#### 1. Core Data
    > use core-data to save the app's permanent data for offline use, to cache temporary data, and add the undo and redo fuc to local device.
    > model layer in our app 
    > can store retrieve, update and delete data.
    > core-data manages the object graph (nothing more than a collection of obj that are connected).
    > add undo and redo func
    > cache temporary data
    > share or sync data using CloudKit .
    

#### 2. Core Data Stack
> Persistent Container : sets up the model context and store coordinator all at once.
> NSManagedObjectModel : NSManagedObjectModel의 인스턴스는 앱의 타입, 프로퍼티, 관계를 설명하는 앱의 모델 파일입니다.
> NSManagedObjectModel : instance of represents app model files 

> NSManagedObjectContext : NSManagedObjectContext의 인스턴스는 앱 타입의 인스턴스에 대한 변경 사항을 추적합니다.
> NSManagedObjectContext : Tracks changes to instances of app

> NSPersistentStoreCoordinator : NSPersistentStoreCoordinator의 인스턴스는 스토어에서 앱 타입의 인스턴스를 저장하고 가져옵니다.
> NSPersistentStoreCoordinator : NSPersistentContainer의 인스턴스는 모델, 컨텍스트, 스토어 coordinator를 한 번에 설정합니다.
> NSPersistentStoreCoordinator : saves and fetches instances of app's types from stores.

```
1. NSManagerdObjectContext로 Persistent Container를 생성한다.
2. View Controller에 생성한 Persistent Container를 전달한다.
3. Entity를 가지고 온다.
4. NSManagedObject를 만든다
5. NSManagedObjectContext에 저장한다.
6. 잘 저장되었는지 앱을 종료하고 확인해본다.
```



#### 3. Core Data Project Template


```



```



#### 4. 


```



```



#### 5. 


```



```





