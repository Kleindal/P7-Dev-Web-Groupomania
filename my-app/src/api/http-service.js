export class HttpService {
    dummyDataEnabled = true;

    async get(url) {
        if (this.dummyDataEnabled) {
            url = this.getLocalDataFile(url);
        }

        return await fetch(url)
            .then(res =>
                res
            ).then(data =>
                data.json()
            ).catch(error => 
                console.log('Fetch problem show: ' + error.message)
            )
    }

    getLocalDataFile(url) {
        switch (url) {
            case '/api/groups':
                return './dummy-data/groups.json'
            case '/api/users':
                return './dummy-data/users.json'
            case '/api/groups/id/messages':
                return './dummy-data/messages.json'    
        
            default:
                throw new Error('This route is not managed in the Dummy Data');
        }
    }
}
