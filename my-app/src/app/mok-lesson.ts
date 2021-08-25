export interface Lesson {
    title: string,
    date: string,
    participants: number,
    coach: string,
    progress: number
    id: string
}

export const Sessions: Lesson[] = [
    {
        title: "Лекция №1",
        date: "2020-08-20T10:00:00.500Z",
        participants: 10,
        coach: "Иванов Иван Иванович",
        progress: 70,
        id: "0001"
    },
    {
        title: "Лекция №2",
        date: "2020-08-22T12:00:00.500Z",
        participants: 12,
        coach: "Иванов Иван Иванович",
        progress: 55,
        id: "0002"
    },
    {
        title: "Лекция №3",
        date: "2020-08-23T10:30:00.500Z",
        participants: 9,
        coach: "Иванов Иван Иванович",
        progress: 80,
        id: "0003"
    },
    {
        title: "Лекция №4",
        date: "2020-08-25T11:30:00.500Z",
        participants: 13,
        coach: "Иванов Иван Иванович",
        progress: 73,
        id: "0004"
    },
    {
        title: "Лекция №5",
        date: "2020-08-28T12:30:00.500Z",
        participants: 10,
        coach: "Иванов Иван Иванович",
        progress: 80,
        id: "0005"
    },
    {
        title: "Лекция №6",
        date: "2020-12-1T20:30:00.500Z",
        participants: 10,
        coach: "Петров Петр Петрович",
        progress: 76,
        id: "0006"
    },
    {
        title: "Лекция №7",
        date: "2020-12-3T21:00:00.500Z",
        participants: 7,
        coach: "Петров Петр Петрович",
        progress: 64,
        id: "0007"
    },
    {
        title: "Лекция №8",
        date: "2020-12-6T20:00:00.500Z",
        participants: 13,
        coach: "Петров Петр Петрович",
        progress: 76,
        id: "0008"
    },
    {
        title: "Лекция №9",
        date: "2020-12-10T20:00:00.500Z",
        participants: 14,
        coach: "Петров Петр Петрович",
        progress: 77,
        id: "0009"
    },
    {
        title: "Лекция №10",
        date: "2020-12-15T21:00:00.500Z",
        participants: 10,
        coach: "Петров Петр Петрович",
        progress: 65,
        id: "0010"
    }
]

