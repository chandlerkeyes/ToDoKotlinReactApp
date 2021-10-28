package com.okta.kotlin.resourceserver.repository

import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
//import org.springframework.stereotype.Component

@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
//@Component("ToDoRepository")
public interface ToDoRepository : CrudRepository<ToDoModel, Long> {
}