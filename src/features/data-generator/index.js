import Faker from 'faker';
class DataGenerator {
    static KEY_MODEL = '_model';
    static KEY_NUM_ROWS = 'numberOfRows';
    static KEY_ROW_DATA = 'rowData';
    static DEFAULT_MODEL = {
        [DataGenerator.KEY_NUM_ROWS]: 0,
        [DataGenerator.KEY_ROW_DATA]: []
    };
    constructor() {
        this[DataGenerator.KEY_MODEL] = Object.assign({}, DataGenerator.DEFAULT_MODEL);
    }
    get model() {
        return this[DataGenerator.KEY_MODEL];
    }
    get numberOfRows() {
        return this.model[DataGenerator.KEY_NUM_ROWS];
    }
    set numberOfRows(newNumberOfRows) {
        this.model[DataGenerator.KEY_NUM_ROWS] = newNumberOfRows;
    }
    get rowData() {
        return this.model[DataGenerator.KEY_ROW_DATA];
    }

    create() {
        for(let i = 0; i < this.numberOfRows; i++) {
            this.rowData.push(this.generateFakeData());
        }
        return this.rowData;
    }

    setNumberOfRows(numOfRows) {
        this.numberOfRows = numOfRows;
        return this;
    }

    generateFakeData() {
        return {
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            jobDesc: Faker.name.jobDescriptor(),
            zipcode: Faker.address.zipCode(),
            city: Faker.address.city()
        };
    }

}

export default DataGenerator;