import axios from "axios"

const base_url = axios.create({baseURL: 'http://localhost:3006'})

export default base_url