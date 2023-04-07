class Utility {
  static getInputValue ( elemntID : string ) : string {
    const postedScores:HTMLInputElement = <HTMLInputElement>document.getElementById(elemntID);
      return postedScores.value;
  }
  
}