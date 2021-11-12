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
	}
}

fun main(args: Array<String>) {
	runApplication<ResourceServerApplication>(*args)
}


