package com.xpress.config

import com.google.gson.GsonBuilder
import com.google.gson.JsonArray
import com.xpress.config.internal.Xpress
import com.xpress.config.internal.XpressionLexer
import org.antlr.v4.runtime.CharStreams
import org.antlr.v4.runtime.CommonTokenStream
import org.antlr.v4.runtime.DefaultErrorStrategy
import org.antlr.v4.runtime.Parser
import org.antlr.v4.runtime.RecognitionException
import java.io.ByteArrayInputStream
import java.io.File
import java.io.InputStream
import java.nio.charset.StandardCharsets


class XpressConfig internal constructor(val configs: List<Config>) : Config() {

    var enablePrettyPrinting: Boolean = true

    val jsonConfig: JsonArray by lazy {
        JsonArray().apply {
            configs.map { add(it.config) }
        }
    }

    private val jsonString: String
        get() {
            val gsonBuilder = GsonBuilder()
            gsonBuilder.disableHtmlEscaping()
            if (enablePrettyPrinting) {
                gsonBuilder.setPrettyPrinting()
            }
            val gson = gsonBuilder.create()
            return gson.toJson(jsonConfig)
        }

    /**
     * Returns first function config for provided name
     */
    fun functionConfig(function: String?): Config.Function? {
        return configs.firstOrNull {
            it is Config.Function && it.name == function
        } as? Config.Function
    }

    /**
     * Returns first function config for provided name
     */
    fun mainFunctionConfig(): Config.Function? {
        return configs.firstOrNull {
            it is Config.Function && it.name == "main"
        } as? Config.Function
    }

    companion object {

        private val ErrorHandler by lazy {
            object : DefaultErrorStrategy() {
                override fun recover(recognizer: Parser, e: RecognitionException) = throw e
                override fun recoverInline(recognizer: Parser) = throw RuntimeException(
                    "Error: Invalid character '${recognizer.currentToken.text}'" +
                            " at [${recognizer.currentToken.line}:${recognizer.currentToken.charPositionInLine}]"
                )
            }
        }

        fun from(file: File): XpressConfig {
            val parser = file.toXpressConfigParser().apply {
                removeErrorListeners()
                errorHandler = ErrorHandler
            }
            val root = parser.configRoot()
            return Visitor().visit(root) as XpressConfig
        }

        fun from(file: InputStream): XpressConfig {
            val parser = file.toXpressConfigParser().apply {
                removeErrorListeners()
                errorHandler = ErrorHandler
            }
            val root = parser.configRoot()
            return Visitor().visit(root) as XpressConfig
        }

        private fun File.toXpressConfigParser(): Xpress {
            val inputStream = ByteArrayInputStream(readBytes())
            val charStream = CharStreams.fromStream(inputStream, StandardCharsets.UTF_8)
            val lexer = XpressionLexer(charStream)
            val tokens = CommonTokenStream(lexer)
            return Xpress(tokens)
        }

        private fun InputStream.toXpressConfigParser(): Xpress {
            val inputStream = ByteArrayInputStream(readBytes())
            val charStream = CharStreams.fromStream(inputStream, StandardCharsets.UTF_8)
            val lexer = XpressionLexer(charStream)
            val tokens = CommonTokenStream(lexer)
            return Xpress(tokens)
        }
    }
}