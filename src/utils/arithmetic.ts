export class Arithmetic {
    /* when pageSize == 10
     * 30 => 1, 11, 21
     * 15 => 1, 11
     */
    public static paginate(total: number, pageSize = 10): number[] {
        let lowIndice: number[] = [];
        let currentIndex = 1;

        while (currentIndex <= total) {
            lowIndice.push(currentIndex);
            currentIndex += pageSize;
        }

        return lowIndice;
    }
}