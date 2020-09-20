// Definition of DATA STRUCTURES

class Queue {
    constructor(size) {
        this.size = 0
        this.list = new LinkedList()
    }

    enqueue(value) {
        this.size++
        this.list.insert(new Node(value))
    }

    dequeue() {
        var temp = this.list.deleteAtStart()
        this.size--
        return temp.value
    }

    peek() {
        return this.list.head.value
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    insert(newNode) {
        if(!this.head) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = this.tail.next
        }
    }

    delete(i) {
        if(!this.head) {
            console.log("List empty")
        } else {
            var temp = this.head

            while(temp.next != this.tail) {
                temp = temp.next
            }
            
            var oldtail = this.tail

            this.tail = temp
            temp.next = null
        }
        return oldtail
    }

    deleteAtStart() {
        if(!this.head) {
            console.log("List empty")
        } else {
            var temp = this.head
            this.head = this.head.next
            return temp
        }
    }
    
    traverse() {
        var temp = this.head

        while(temp.next != null) {
            console.log(temp.value)
            temp = temp.next
        }
        console.log(temp.value)
        
    }
}

class Node {
    constructor(value, next) {
        this.value = value || null
        this.next = next || null
    }
}

// Functions used in the program

function openViwereWindow() {
    document.getElementById("join-vote").style.display = "flex"
}

function closeViewerWindow() {
    document.getElementById("join-vote").style.display = "none"
}

function openAdminWindow() {
    document.getElementById("admin-vote").style.display = "flex"
}

function closeAdminWindow() {
    document.getElementById("admin-vote").style.display = "none"
}

function closeRequestsWindow() {
    document.getElementById("requests").style.display = "none"
}

function submitViewer() {
    var viewer = document.createElement("div")

    viewer.className = "row"

    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var city = document.getElementById("city").value
    var gender = document.getElementById("gender-choose").value

    if(gender === "male")
        gender = "Male"
    else
        gender = "Female"

    viewer.innerHTML = "<p class=\"name\">" + name + "</p><p class=\"age\">" + age + "</p><p class=\"city\">" + city + "</p><p class=\"gender\">" + gender + "</p><input type=\"checkbox\" name=\"check\" value=\"submit?\" id=\"check\">"

    document.getElementById("issues-requests").appendChild(viewer)

    closeViewerWindow();
}
 
function submitAdmin() {
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value

    if(id != "admin" || password != "admin"){
        closeAdminWindow();
        return
    }

    var adminLogo = document.getElementById("admin-logo")
    adminLogo.textContent = "Logged in as " + id
    adminLogo.style.display = "block";

    document.getElementById("logout").style.display = "block"
    document.getElementById("admin").style.display = "none"
    
    document.getElementById("requests-btt").style.display = "block"
    document.getElementById("join").style.display = "none"

    closeAdminWindow();
}

function logout() {
    document.getElementById("admin-logo").style.display = "none"
    document.getElementById("logout").style.display = "none"
    
    document.getElementById("requests-btt").style.display = "none"
    document.getElementById("join").style.display = "block"
    
    document.getElementById("admin").style.display = "block"
}

function sorting() {
    var option = document.getElementById("options").value
    var content = document.getElementsByClassName("content")[0]
    var rows = content.children


    if(option === "name") {
        var namesArray = new Array()

        for(var i = 0; i < rows.length; i++) {
            var row = rows[i].children

            for(var j = 0; j < row.length; j++) {
                if(row[j].className == "name")
                    namesArray.push(row[j].textContent)
            }
        }

        console.log(namesArray)
        namesArray.sort()
        console.log(namesArray)

        var sortedDivs = []

        for(var i = 0; i < namesArray.length; i++) {
            for(var j = 0; j < rows.length; j++) {
                if(namesArray[i] === rows[j].children[0].textContent){
                    sortedDivs.push(rows[j])
                }
            }
        }

        content.innerHTML = ""

        for(var i = 0; i < sortedDivs.length; i++) {
            content.appendChild(sortedDivs[i])
        }

    } else if(option === "votes") {

        var votesArray = new Array()

        for(var i = 0; i < rows.length; i++) {
            var row = rows[i].children

            for(var j = 0; j < row.length; j++) {
                if(row[j].className == "votes")
                    votesArray.push(row[j].textContent)
            }
        }

        votesArray.sort(function(a, b) {return b-a})

        var sortedDivs = []

        for(var i = 0; i < votesArray.length; i++) {
            for(var j = 0; j < rows.length; j++) {
                if(votesArray[i] === rows[j].children[4].textContent){
                    sortedDivs.push(rows[j])
                }
            }
        }

        content.innerHTML = ""

        for(var i = 0; i < sortedDivs.length; i++) {
            content.appendChild(sortedDivs[i])
        }

    } else if(option === "age") {

        var ageArray = new Array()

        for(var i = 0; i < rows.length; i++) {
            var row = rows[i].children

            for(var j = 0; j < row.length; j++) {
                if(row[j].className == "age")
                    ageArray.push(parseInt(row[j].textContent))
            }
        }
        
        ageArray.sort(function(a, b) {return a-b})

        var sortedDivs = []

        for(var i = 0; i < ageArray.length; i++) {
            for(var j = 0; j < rows.length; j++) {
                if(ageArray[i] === parseInt(rows[j].children[1].textContent)){
                    sortedDivs.push(rows[j])
                }
            }
        }

        content.innerHTML = ""

        for(var i = 0; i < sortedDivs.length; i++) {
            content.appendChild(sortedDivs[i])
        }

    } else if(option === "city") {
        var cityArray = new Array()

        for(var i = 0; i < rows.length; i++) {
            var row = rows[i].children

            for(var j = 0; j < row.length; j++) {
                if(row[j].className == "city")
                    cityArray.push(row[j].textContent)
            }
        }
        
        cityArray.sort()

        var sortedDivs = []

        for(var i = 0; i < cityArray.length; i++) {
            for(var j = 0; j < rows.length; j++) {
                if(cityArray[i] === rows[j].children[2].textContent){
                    sortedDivs.push(rows[j])
                }
            }
        }

        content.innerHTML = ""

        for(var i = 0; i < sortedDivs.length; i++) {
            content.appendChild(sortedDivs[i])
        }
        
    } else if(option === "gender") {
        var genderArray = new Array()

        for(var i = 0; i < rows.length; i++) {
            var row = rows[i].children

            for(var j = 0; j < row.length; j++) {
                if(row[j].className == "gender")
                    genderArray.push(row[j].textContent)
            }
        }
        
        genderArray = genderArray.sort()

        var sortedDivs = []

        for(var i = 0; i < genderArray.length; i++) {
            for(var j = 0; j < rows.length; j++) {
                if(genderArray[i] === rows[j].children[3].textContent){
                    sortedDivs.push(rows[j])
                }
            }
        }

        content.innerHTML = ""

        for(var i = 0; i < sortedDivs.length; i++) {
            content.appendChild(sortedDivs[i])
        }
    }
}

function requests() {
    document.getElementById("requests").style.display = "flex"
}

function requestsClose() {
    document.getElementById("requests").style.display = "none"
}

function submitAdminRequests() {
    var requestBoard = document.getElementById("issues-requests").children
    var queue = new Queue()

    for(var i = 0; i < requestBoard.length; i++) {
        queue.enqueue(requestBoard[i])
    }

    for(var i = 0; i < requestBoard.length; i++) {
        if(queue.peek().children[4].checked == true) {
            var record = document.createElement("div")
            record.className = "row candidates"

            var name = queue.peek().children[0].textContent
            var age = queue.peek().children[1].textContent
            var city = queue.peek().children[2].textContent
            var gender = queue.peek().children[3].textContent
        
            record.innerHTML = "<p class=\"name\">" + name + "</p><p class=\"age\">" + age + "</p><p class=\"city\">" + city + "</p><p class=\"gender\">" + gender + "<p class=\"votes\">" + 0 + "</p><p class=\"choice\"><input type=\"checkbox\" value=\"choice?\" class=\"choice\"></p>"
            document.getElementsByClassName("content")[0].appendChild(record)
            console.log(queue.dequeue())
        }
    }

    var length = requestBoard.length
    for(var i = 0; i < length; i++) {
        if(requestBoard[i].children[4].checked == true) {
            requestBoard[i].id = "remove-this"

            var element = document.getElementById("remove-this")
            element.parentNode.removeChild(element)
            i--
        }
    }

    if(requestBoard.length === 0) {
        var heading = document.createElement("h1")
        heading.className = "viewer-heading"
        heading.textContent = "No requests"

        document.getElementById("issues-requests").appendChild(heading)
    }

    requestsClose();
}

var choiceDisplayed = false

function addVote() {
    var choices = document.getElementsByClassName("choice")
    
    for(var i = 0; i < choices.length; i++) {
        if(choiceDisplayed == false)
            choices[i].style.display = "block"
        else
            choices[i].style.display = "none"

        choices[i].style.margin = "auto"
    }

    
    if(choiceDisplayed == false)
        choiceDisplayed = true
    else
        choiceDisplayed = false

    for(var i = 1; i < choices.length; i++) {
        choices[i].setAttribute("onclick","voteAdded()")
    }
}

function voteAdded() {
    document.getElementById("add-vote").style.display = "none"
    
    var choices = document.getElementsByClassName("choice")
    for(var i = 0; i < choices.length; i++) {
        choices[i].style.display = "none"
    }
}

document.addEventListener('click', function (e) {

	if (e.target.closest('.choice')) {
        var int = parseInt(e.target.parentNode.parentNode.children[4].textContent)
        int++
        e.target.parentNode.parentNode.children[4].textContent = int
    }

}, false);