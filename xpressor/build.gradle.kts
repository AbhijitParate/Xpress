plugins {
    id("java-library")
    id("org.jetbrains.kotlin.jvm")
    id("kotlin")
    id("antlr")
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
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
    arguments = arguments + listOf("-package", "com.xpress.xpressor.internal", "-visitor")
    outputDirectory = File("${project.projectDir}/build/generated/com/xpress/xpressor/internal")
}

tasks.compileKotlin {
    kotlinOptions.jvmTarget = "1.8"
    dependsOn(tasks.generateGrammarSource)
}

tasks.compileTestKotlin {
    kotlinOptions.jvmTarget = "1.8"
    dependsOn(tasks.generateTestGrammarSource)
}

dependencies {
    antlr("org.antlr:antlr4:4.13.1")
    implementation("org.antlr:antlr4-runtime:4.13.1")
    implementation("org.jetbrains.kotlin:kotlin-stdlib:1.9.10")
    implementation("org.apache.commons:commons-text:1.10.0")
    implementation("com.google.code.gson:gson:2.10")
    testImplementation(kotlin("test"))
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.10.0")
    testImplementation("org.junit.jupiter:junit-jupiter-engine:5.10.0")
    testImplementation("org.jetbrains.kotlin:kotlin-test:1.9.10")
    testImplementation("org.junit.platform:junit-platform-suite-engine:1.10.0")
}

tasks.test {
    useJUnitPlatform()
}