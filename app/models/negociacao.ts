export class Negociacao
{
    constructor(
        private readonly data: Date,
        private readonly quantidade: number,
        private readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor
    }
}