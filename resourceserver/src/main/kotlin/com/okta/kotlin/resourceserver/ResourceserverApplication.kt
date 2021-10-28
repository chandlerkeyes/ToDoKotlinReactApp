package com.okta.kotlin.resourceserver

import com.okta.kotlin.resourceserver.repository.ToDoModel
import com.okta.kotlin.resourceserver.repository.ToDoRepository
import org.springframework.boot.*
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class ResourceServerApplication {
	@Bean
	fun run(repository: ToDoRepository) = ApplicationRunner {
		repository.save(
			ToDoModel(
			userId = 115,
			description = "Do the dishes",
			done = true
		)
		)

		repository.save(
			ToDoModel(
			userId = 116,
			description = "Wash the dog",
			done = false
		)
		)
	}
}

fun main(args: Array<String>) {
	runApplication<ResourceServerApplication>(*args)
}


