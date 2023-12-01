function array(): void {
    let nama: string[] = ['yudha', 'prawira', 'sugiharto']
    console.log(nama)

    // READ ONLY ARRAY
    const kota: ReadonlyArray<String> = ['bandung', 'surabaya', 'majenang']
    console.log(kota[2])

    // TUPLE
    const data: readonly [String, Number, Number] = ['Yudha', 20, 99999999]

}

array()