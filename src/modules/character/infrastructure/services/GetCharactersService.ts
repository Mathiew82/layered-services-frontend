export class GetCharactersService {
  provide: any;

  constructor(provide: any) {
    this.provide = provide;
  }

  public async execute(): Promise<object> {
    const options = {
      method: "GET",
      headers: this.provide.headers,
    };

    return await (
      await fetch("https://rickandmortyapi.com/api/character", options)
    ).json();
  }
}
