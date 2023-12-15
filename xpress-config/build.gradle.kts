plugins {
    id("java-library")
    id("org.jetbrains.kotlin.jvm")
    id("kotlin")
    id("antlr")
}

java {
    sourceCompatibility = JavaVersion.VERSION_21
    targetCompatibility = JavaVersion.VERSION_21
}

sourceSets {
    main {
        java {
            srcDir("${project.projectDir}/build/generated")
        }
        kotlin {
            srcDir("src/main/kotlin")
        }
    }
    test {
        kotlin {
            srcDir("src/test/kotlin")
        }
    }
}

tasks.generateGrammarSource {
    maxHeapSize = "64m"
    arguments = arguments + listOf(
        "-o", "${project.projectDir}/build/generated",
        "/src/antlr/*.g4",
        "-package", "com.xpress.config.internal",
        "-visitor",
    )
    outputDirectory = File("${project.projectDir}/build/generated/com/xpress/xpressor/internal")
}

tasks.compileKotlin {
    kotlinOptions.jvmTarget = "21"
    dependsOn(tasks.generateGrammarSource)
}

tasks.compileTestKotlin {
    kotlinOptions.jvmTarget = "21"
    dependsOn(tasks.generateTestGrammarSource)
}

dependencies {
    antlr("org.antlr:antlr4:4.13.1")
    implementation("org.antlr:antlr4-runtime:4.13.1")
    implementation("org.jetbrains.kotlin:kotlin-stdlib:1.9.21")
    implementation("org.apache.commons:commons-text:1.11.0")
    implementation("com.google.code.gson:gson:2.10.1")
    testImplementation(kotlin("test"))
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.10.1")
    testImplementation("org.junit.jupiter:junit-jupiter-engine:5.10.1")
    testImplementation("org.jetbrains.kotlin:kotlin-test:1.9.21")
    testImplementation("org.junit.platform:junit-platform-suite-engine:1.10.1")
}

tasks.test {
    useJUnitPlatform()
}