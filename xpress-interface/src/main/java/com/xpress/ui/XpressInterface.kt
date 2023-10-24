package com.xpress.ui

import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.sp
import com.xpress.XpressAction

@Composable
fun XpressInterface(
    data: XpressAction.Data,
    modifier: Modifier
) {
    Surface {
        if (data is XpressAction.None) {
                Text(
                    text = "Loading...",
                    modifier = modifier,
                    textAlign = TextAlign.Center,
                    style = TextStyle(color = Color.Blue),
                    fontSize = 20.sp
                )
                Button(
                    onClick = {
                        println("Loading...")
                    },
                    colors = ButtonDefaults.buttonColors(Color(0XFF0F9D58))
                ) {
                    Text(
                        text = "Click to Start",
                        textAlign = TextAlign.Center,
                        style = TextStyle(color = Color.Blue),
                        fontSize = 20.sp
                    )
                }
        } else {
            Text(
                text = "WIP...",
                modifier = modifier,
                textAlign = TextAlign.Center,
                style = TextStyle(color = Color.Blue),
                fontSize = 20.sp
            )
        }
    }
}