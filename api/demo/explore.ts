import { NextResponse } from "next/server"

export async function handleExploreDemo() {
    await new Promise(resolve =>
        setTimeout(resolve, 1000)
    )

    return NextResponse.json({
        success: false,
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong while fetching data.",
            details: "Unknown server error"
        }
    },
    { status: 500 }
    )
}