
const BASE_URL = 'http://localhost:3000'

// 發送 POST 到 /submit
export async function submitMessage(message) {
    const res = await fetch(`${BASE_URL}/submit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })//// 傳送 JSON 格式資料
    })
    return await res.json()
}

// 取得 GET /sentence
export async function fetchSentence() {
    const res = await fetch(`${BASE_URL}/sentence`)
    return await res.json()
}
