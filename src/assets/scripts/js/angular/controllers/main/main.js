app.controller("controller.main", ["$scope", "$rootScope", function ($scope, $rootScope) {

    // $scope.columns = [
    //     {
    //         id: 01,
    //         name: "Tarefa",
    //         tasks: [
    //             {
    //                 name: "Task 01",
    //                 date: {
    //                     day: "28",
    //                     month: "March",
    //                     year: "2023",
    //                     status: "bg-filter-success"
    //                 },
    //                 label: {
    //                     name: "Test task (Aproved)",
    //                     color: "filter-success"
    //                 },
    //                 users: [
    //                     {
    //                         id: 01,
    //                         url: "../../src/assets/imgs/Users/user.jpg"
    //                     },
    //                     {
    //                         id: 02,
    //                         url: "../../src/assets/imgs/Users/user-1.jpg"
    //                     },
    //                     {
    //                         id: 03,
    //                         url: "../../src/assets/imgs/Users/user-4.jpg"
    //                     },
    //                 ],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices ligula risus, vitae dictum est dapibus a. Proin nec erat leo. Phasellus in erat scelerisque, volutpat neque eu, placerat nulla. Nunc in ipsum a leo efficitur ultricies. Nulla facilisi. Duis sagittis erat sed luctus imperdiet. Mauris ut tincidunt nisi."
    //             },
    //             {
    //                 name: "Task 02",
    //                 date: {
    //                     day: "28",
    //                     month: "March",
    //                     year: "2023",
    //                     status: "bg-filter-warning"
    //                 },
    //                 label: {
    //                     name: "Test task (In progress)",
    //                     color: "filter-warning"
    //                 },
    //                 users: [
    //                     {
    //                         id: 01,
    //                         url: "../../src/assets/imgs/Users/user.jpg"
    //                     },
    //                     {
    //                         id: 02,
    //                         url: "../../src/assets/imgs/Users/user-1.jpg"
    //                     }
    //                 ],
    //             },
    //             {
    //                 name: "Task 03",
    //                 date: {
    //                     day: "28",
    //                     month: "March",
    //                     year: "2023",
    //                     status: "bg-filter-danger"
    //                 },
    //                 label: {
    //                     name: "Test task (Reproved)",
    //                     color: "filter-danger"
    //                 },
    //             },
    //             {
    //                 name: "Task 04",
    //                 date: {
    //                     day: "28",
    //                     month: "March",
    //                     year: "2023",
    //                     status: "bg-filter-default"
    //                 },
    //                 label: {
    //                     name: "Test task (In progress)",
    //                     color: "filter-success"
    //                 },
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    //             }
    //         ]
    //     },
    //     {
    //         id: 02,
    //         name: "Tarefa",
    //         tasks: [
    //             {
    //                 name: "Task 02",
    //                 date: {
    //                     day: "28",
    //                     month: "March",
    //                     year: "2023",
    //                     status: "bg-filter-warning"
    //                 },
    //                 label: {
    //                     name: "Test task (In progress)",
    //                     color: "filter-warning"
    //                 },
    //                 users: [
    //                     {
    //                         id: 01,
    //                         url: "../../src/assets/imgs/Users/user.jpg"
    //                     },
    //                     {
    //                         id: 02,
    //                         url: "../../src/assets/imgs/Users/user-1.jpg"
    //                     }
    //                 ],
    //             },
    //             {
    //                 name: "Task 03",
    //                 date: {
    //                     day: "28",
    //                     month: "March",
    //                     year: "2023",
    //                     status: "bg-filter-danger"
    //                 },
    //                 label: {
    //                     name: "Test task (Reproved)",
    //                     color: "filter-danger"
    //                 },
    //             }
    //         ]
    //     },
    //     {
    //         id: 03,
    //         name: "Tarefa",
    //         tasks: [
    //             {
    //                 name: "Task 04",
    //                 date: {
    //                     day: "28",
    //                     month: "March",
    //                     year: "2023",
    //                     status: "bg-filter-default"
    //                 },
    //                 label: {
    //                     name: "Test task (In progress)",
    //                     color: "filter-success"
    //                 },
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    //             }
    //         ]
    //     }
    // ]
}])