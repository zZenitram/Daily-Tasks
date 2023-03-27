app.service("$task.service", [function () {

    var id = { column: 0, task: 0 };

    var columns = [];
    var task = {
        id: null,
        name: null,
        date: {
            day: null,
            month: null,
            year: null,
            status: null,
        },
        label: {
            name: null,
            color: null,
        },
        users: [],
        description: null,
    }

    this.set = {

        task: function (column, data) {
            columns[column.id].tasks.push({ ...angular.copy(data), ...{ id: id.task++ } });
            return columns
        },

        column: function () {
            columns.push({ ...{ name: "New Column" }, ...{ tasks: [] }, ...{ id: id.column++ } });
            return columns
        },

        status: function (status) {
            switch (status) {
                case 'DONE':
                    task.label.name = "Done";
                    task.label.color = "filter-success";
                    return task.label;

                case 'IN_PROGRESS':
                    task.label.name = "In progress"
                    task.label.color = "filter-warning"
                    return task.label;

                case 'CANCELED':
                    task.label.name = "Canceled"
                    task.label.color = "filter-danger"
                    return task.label;

                default:
                    task.label.name = "Without status"
                    task.label.color = "filter-default"
                    return task.label;
            }
        }
    }

    this.get = {
        id: {
            task: function () {
                return;
            }
        }
    }

    this.put = {
        task: function (column, data) {
            var index;

            const array = columns[column.id].tasks.map(function (element, i) {
                if (element.id === data.id) {
                    index = i;
                    return { ...element, ...data };
                }
                return element;
            });

            return array[index];
        }
    }

    this.delete = {
        task: function (column, data) {
            const array = columns[column.id].tasks.filter(function (element) {
                return element.id !== data.id;
            });

            return array
        }
    }

}])