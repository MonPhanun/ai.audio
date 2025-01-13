export class AudioModel {
    book: string = "";
    menu: string = "";
    cd: string = "";
    track: string = "";
    exercise: string = "";
    page: string = "";
    audioName: string = "";
    audio: string = "";

    constructor(book: string, menu: string, audioName: string, cd: string, track: string, exercise: string, page: string, audio: string) {
        this.book = book;
        this.menu = menu;
        this.cd = cd;
        this.track = track;
        this.exercise = exercise;
        this.page = page;
        this.audioName = audioName;
        this.audio = audio;
    }

    static bookOneAudio = [
        new AudioModel("Book 1", "CD1 T1", "Audio 1", "CD 1", "Track 1", "......", "......", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 01 Credits.mp3"),
        new AudioModel("Book 1", "CD1 T2 P5 Ex5", "Audio 2", "CD 1", "Track 2", "Exercise 5", "Page 5", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 02 p5 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T3 P5 Ex5-7", "Audio 3", "CD 1", "Track 3", "Exercise 6-7", "Page 5", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 03 p5 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T4 P7 Ex5", "Audio 4", "CD 1", "Track 4", "Exercise 5", "Page 7", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 04 p7 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T5 P7 Ex5-7", "Audio 5", "CD 1", "Track 5", "Exercise 6-7", "Page 7", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 05 p7 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T6 P9 Ex5", "Audio 6", "CD 1", "Track 6", "Exercise 5", "Page 9", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 06 p9 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T7 P9 Ex5-7", "Audio 7", "CD 1", "Track 7", "Exercise 6-7", "Page 9", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 07 p9 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T8 P11 Ex5", "Audio 8", "CD 1", "Track 8", "Exercise 5", "Page 11", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 08 p11 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T9 P11 Ex5-7", "Audio 9", "CD 1", "Track 9", "Exercise 6-7", "Page 11", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 09 p11 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T10 P13 Ex5", "Audio 10", "CD 1", "Track 10", "Exercise 5", "Page 13", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 10 p13 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T11 P13 Ex5-7", "Audio 11", "CD 1", "Track 11", "Exercise 6-7", "Page 13", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 11 p13 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T12 P15 Ex5", "Audio 12", "CD 1", "Track 12", "Exercise 5", "Page 15", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 12 p15 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T13 P15 Ex5-7", "Audio 13", "CD 1", "Track 13", "Exercise 6-7", "Page 15", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 13 p15 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T14 P17 Ex5", "Audio 14", "CD 1", "Track 14", "Exercise 5", "Page 17", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 14 p17 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T15 P17 Ex5-7", "Audio 15", "CD 1", "Track 15", "Exercise 6-7", "Page 17", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 15 p17 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T16 P19 Ex5", "Audio 16", "CD 1", "Track 16", "Exercise 5", "Page 19", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 16 p19 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T17 P19 Ex5-7", "Audio 17", "CD 1", "Track 17", "Exercise 6-7", "Page 19", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 17 p19 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T18 P21 Ex5", "Audio 18", "CD 1", "Track 18", "Exercise 5", "Page 21", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 18 p21 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T19 P21 Ex5-7", "Audio 19", "CD 1", "Track 19", "Exercise 6-7", "Page 21", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 19 p21 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T20 P23 Ex5", "Audio 20", "CD 1", "Track 20", "Exercise 5", "Page 23", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 20 p23 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T21 P23 Ex5-7", "Audio 21", "CD 1", "Track 21", "Exercise 6-7", "Page 23", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 21 p23 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T22 P25 Ex5", "Audio 22", "CD 1", "Track 22", "Exercise 5", "Page 25", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 22 p25 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T23 P25 Ex5-7", "Audio 23", "CD 1", "Track 23", "Exercise 6-7", "Page 25", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 23 p25 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T24 P27 Ex5", "Audio 24", "CD 1", "Track 24", "Exercise 5", "Page 27", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 24 p27 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T25 P27 Ex5-7", "Audio 25", "CD 1", "Track 25", "Exercise 6-7", "Page 27", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 25 p27 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T26 P29 Ex5", "Audio 26", "CD 1", "Track 26", "Exercise 5", "Page 29", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 26 p29 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T27 P29 Ex5-7", "Audio 27", "CD 1", "Track 27", "Exercise 6-7", "Page 29", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 27 p29 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T28 P31 Ex5", "Audio 28", "CD 1", "Track 28", "Exercise 5", "Page 31", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 28 p31 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T29 P31 Ex5-7", "Audio 29", "CD 1", "Track 29", "Exercise 6-7", "Page 31", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 29 p31 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T30 P33 Ex5", "Audio 30", "CD 1", "Track 30", "Exercise 5", "Page 33", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 30 p33 Ex5.mp3"),
        new AudioModel("Book 1", "CD1 T31 P33 Ex5-7", "Audio 31", "CD 1", "Track 31", "Exercise 6-7", "Page 33", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 31 p33 Ex6-7.mp3"),
        new AudioModel("Book 1", "CD1 T32 P34 Glossary", "Audio 32", "CD 1", "Track 32", "Glossary", "Page 34", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 32 p34 Glossary.mp3"),

    ];
    //
    static bookTwoAudio = [
        new AudioModel("Book 2", "CD1 T1 P5 Ex5", "Audio 1", "CD 1", "Track 1", "Exercise 5", "Page 5", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 33 p5 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T2 P5 Ex6-7", "Audio 2", "CD 1", "Track 2", "Exercise 6-7", "Page 5", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 34 p5 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T3 P7 Ex5", "Audio 3", "CD 1", "Track 3", "Exercise 5", "Page 7", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 35 p7 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T4 P7 Ex6-7", "Audio 4", "CD 1", "Track 4", "Exercise 6-7", "Page 7 ", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 36 p7 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T5 P9 Ex5", "Audio 5", "CD 1", "Track 5", "Exercise 5", "Page 9", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 37 p9 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T6 P9 Ex6-7", "Audio 6", "CD 1", "Track 6", "Exercise 6-7", "Page 9", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 38 p9 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T7 P11 Ex5", "Audio 7", "CD 1", "Track 7", "Exercise 5", "Page 11", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 39 p11 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T8 P11 Ex6-7", "Audio 8", "CD 1", "Track 8", "Exercise 6-7", "Page 11", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 40 p11 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T9 P13 Ex5", "Audio 9", "CD 1", "Track 9", "Exercise 5", "Page 13", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 41 p13 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T10 P13 Ex6-7", "Audio 10", "CD 1", "Track 10", "Exercise 6-7", "Page 13", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 42 p13 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T11 P15 Ex5", "Audio 11", "CD 1", "Track 11", "Exercise 5", "Page 15", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 43 p15 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T12 P15 Ex6-7", "Audio 12", "CD 1", "Track 12", "Exercise 6-7", "Page 15", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 44 p15 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T13 P17 Ex5", "Audio 13", "CD 1", "Track 13", "Exercise 5", "Page 17", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 45 p17 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T14 P17 Ex6-7", "Audio 14", "CD 1", "Track 14", "Exercise 6-7", "Page 17", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 46 p17 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T15 P19 Ex5", "Audio 15", "CD 1", "Track 15", "Exercise 5", "Page 19", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 47 p19 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T16 P19 Ex6-7", "Audio 16", "CD 1", "Track 16", "Exercise 6-7", "Page 19", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 48 p19 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T17 P21 Ex5", "Audio 17", "CD 1", "Track 17", "Exercise 5", "Page 21", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 49 p21 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T18 P12 Ex6-7", "Audio 18", "CD 1", "Track 18", "Exercise 6-7", "Page 21", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 50 p21 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T19 P23 Ex5", "Audio 19", "CD 1", "Track 19", "Exercise 5", "Page 23", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 51 p23 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T20 P23 Ex6-7", "Audio 20", "CD 1", "Track 20", "Exercise 6-7", "Page 23", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 52 p23 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T21 P25 Ex5", "Audio 21", "CD 1", "Track 21", "Exercise 5", "Page 25", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 53 p25 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T22 P25 Ex6-7", "Audio 22", "CD 1", "Track 22", "Exercise 6-7", "Page 25", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 54 p25 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T23 P27 Ex5", "Audio 23", "CD 1", "Track 23", "Exercise 5", "Page 27", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 55 p27 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T24 P27 Ex6-7", "Audio 24", "CD 1", "Track 24", "Exercise 6-7", "Page 27", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 56 p27 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T25 P29 Ex5", "Audio 25", "CD 1", "Track 25", "Exercise 5", "Page 29", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 57 p29 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T26 P29 Ex6-7", "Audio 26", "CD 1", "Track 26", "Exercise 6-7", "Page 29", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 58 p29 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T27 P31 Ex5", "Audio 27", "CD 1", "Track 27", "Exercise 5", "Page 31", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 59 p31 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T28 P31 Ex6-7", "Audio 28", "CD 1", "Track 28", "Exercise 6-7", "Page 31", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 60 p31 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T29 P34 Glossary", "Audio 29", "CD 1", "Track 29", "Glossary", "Page 34", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD2 Track 01 p34 Glossary.mp3"),

    ];
    //
    static bookThreeAudio = [
        new AudioModel("Book 2", "CD1 T1 P5 Ex5", "Audio 1", "CD 1", "Track 1", "Exercise 5", "Page 5", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 02 p5 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T2 P5 Ex6-7", "Audio 2", "CD 1", "Track 2", "Exercise 6-7", "Page 5", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 03 p5 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T3 P7 Ex5", "Audio 3", "CD 1", "Track 3", "Exercise 5", "Page 7", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 04 p7 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T4 P7 Ex6-7", "Audio 4", "CD 1", "Track 4", "Exercise 6-7", "Page 7", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 05 p7 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T5 P9 Ex5", "Audio 5", "CD 1", "Track 5", "Exercise 5", "Page 9", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 06 p9 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T6 P9 Ex6-7", "Audio 6", "CD 1", "Track 6", "Exercise 6-7", "Page 9", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 07 p9 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T7 P11 Ex5", "Audio 7", "CD 1", "Track 7", "Exercise 5", "Page 11", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 08 p11 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T8 P11 Ex6-7", "Audio 8", "CD 1", "Track 8", "Exercise 6-7", "Page 11", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 09 p11 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T9 P13 Ex5", "Audio 9", "CD 1", "Track 9", "Exercise 5", "Page 13", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 10 p13 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T10 P13 Ex6-7", "Audio 10", "CD 1", "Track 10", "Exercise 6-7", "Page 13", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 11 p13 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T11 P15 Ex6-7", "Audio 11", "CD 1", "Track 11", "Exercise 6-7", "Page 15", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 13 p15 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T12 P17 Ex5", "Audio 12", "CD 1", "Track 12", "Exercise 5", "Page 17", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 14 p17 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T13 P17 Ex6-7", "Audio 13", "CD 1", "Track 13", "Exercise 6-7", "Page 17", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 15 p17 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T14 P19 Ex5", "Audio 14", "CD 1", "Track 14", "Exercise 5", "Page 19", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 16 p19 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T15 P19 Ex6-7", "Audio 15", "CD 1", "Track 15", "Exercise 6-7", "Page 19", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 17 p19 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T16 P21 Ex5", "Audio 16", "CD 1", "Track 16", "Exercise 5", "Page 21", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 18 p21 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T17 P21 Ex6-7", "Audio 17", "CD 1", "Track 17", "Exercise 6-7", "Page 21", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 19 p21 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T18 P23 Ex5", "Audio 18", "CD 1", "Track 18", "Exercise 5", "Page 23", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 20 p23 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T19 P23 Ex6-7", "Audio 19", "CD 1", "Track 19", "Exercise 6-7", "Page 23", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 21 p23 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T20 P25 Ex5", "Audio 20", "CD 1", "Track 20", "Exercise 5", "Page 25", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 22 p25 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T21 P25 Ex6-7", "Audio 21", "CD 1", "Track 21", "Exercise 6-7", "Page 25", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 23 p25 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T22 P27 Ex5", "Audio 22", "CD 1", "Track 22", "Exercise 5", "Page 27", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 24 p27 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T23 P27 Ex6-7", "Audio 23", "CD 1", "Track 23", "Exercise 6-7", "Page 27", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 25 p27 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T24 P29 Ex5", "Audio 24", "CD 1", "Track 24", "Exercise 5", "Page 29", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 26 p29 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T25 P29 Ex6-7", "Audio 25", "CD 1", "Track 25", "Exercise 6-7", "Page 29", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 27 p29 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T26 P31 Ex5", "Audio 26", "CD 1", "Track 26", "Exercise 5", "Page 31", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 28 p31 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T27 P31 Ex6-7", "Audio 27", "CD 1", "Track 27", "Exercise 6-7", "Page 31", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 29 p31 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T28 P33 Ex5", "Audio 28", "CD 1", "Track 28", "Exercise 5", "Page 33", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 30 p33 Ex5.mp3"),
        new AudioModel("Book 2", "CD1 T29 P33 Ex6-7", "Audio 29", "CD 1", "Track 29", "Exercise 6-7", "Page 33", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 31 p33 Ex6-7.mp3"),
        new AudioModel("Book 2", "CD1 T1 P34 Glossary", "Audio 30", "CD 1", "Track 30", "Glossary", "Page 34", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 32 p34 Glossary.mp3"),
    ];
}