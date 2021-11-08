package com.okta.kotlin.resourceserver.repository

import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
public interface ToDoRepository : CrudRepository<ToDoModel, Long> {
}