package com.okta.kotlin.resourceserver.repository

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class ToDoModel(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long = -1,
    var userId: Long = 123,
    var description: String = "Do Laundry",
    var done: Boolean = false
){
}