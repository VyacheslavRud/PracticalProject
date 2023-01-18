import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-sort-by-letter',
  templateUrl: './sort-by-letter.component.html',
  styleUrls: ['./sort-by-letter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortByLetterComponent<T> {

  arrayWithData = [
    'PHP', 'Array', 'Mass', 'Mars', 'JAVA','JAVA', 'JavaScript', 'Python', 'C#', 'Abrams', 'Angular', 'XXX', 'Bradly', 'Cow'
  ];
  data: Map<string, Array<any>>;
  filterData: Map<string, Array<any>> | Map<string, any>;

  constructor() {
    // this.letters = this.arrayWithData.map(data => {
    //   return data.charAt(0);
    // }).filter((char, index, array) => {
    //   return array.indexOf(char) === index
    // }).sort();
    // this.data = this.letters.reduce((acc: any, val) => {
    //   acc[val] = this.arrayWithData.filter(f => f.startsWith(val))
    //   return acc;
    // }, {})
    // this.filterData = JSON.parse(JSON.stringify(this.data));

    let map = new Map();
    this.arrayWithData.forEach(str => {
      const value = (map.get(str.at(0)) ?? [])
      value.push(str)
      map.set(str.at(0), value)
    })
    map = new Map([...map.entries()].sort())
    this.data = map;
    this.filterData = new Map(this.data)
  }

  sortData(event: any) {
    const value = event.target.value.trim().toLowerCase();

    //// Default Data
    // Object.entries(this.data).map(([key,values]) => {
    //   this.filterData[key] = values.filter(f => f.toLowerCase().includes(value));
    // })

    ///With MAP
    // this.filterData = new Map(([...this.data.entries()]).map(([key, val]) => {
    //   const filteredValue = val.filter((f: string) => f.toLowerCase().includes(value))
    //   return [key, filteredValue]
    // }))

    [...this.data.entries()].forEach(([key, val]) => {
      const filteredValue = val.filter((f: string) => f.toLowerCase().includes(value))
      if (!filteredValue.length){
        this.filterData.delete(key)
      }else {
        this.filterData.set(key, filteredValue)
      }
    })
    this.filterData = new Map([...this.filterData.entries()].sort())
    const obj = Object.fromEntries(this.filterData)
    const set = new Set(Object.values(obj).flat()) // Unique values (deleted JAVA duplicate)
    const c = console.log.bind(document)
    c(Array.from(set))
    // const setValues =set.values();
    // console.log(setValues.next())
    // console.log(setValues.next())

  }

}
