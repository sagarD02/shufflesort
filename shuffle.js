var shufflesort = (function shuffleAndSort() {
    const numarray = [{ num: 1, class: 'colorGrp1' }, { num: 2, class: 'colorGrp2' }, { num: 3, class: 'colorGrp3' }, { num: 4, class: 'colorGrp4' }, { num: 5, class: 'colorGrp1' }, { num: 6, class: 'colorGrp2' }, { num: 7, class: 'colorGrp3' }, { num: 8, class: 'colorGrp4' }, { num: 9, class: 'colorGrp1' }];

    function shuffle() {
        let counter = numarray.length;
        let temp;
        let index;

        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = numarray[counter];
            numarray[counter] = numarray[index];
            numarray[index] = temp;
        }
        render(numarray);
    }

    function sort() {
        numarray.sort(function(x, y) {
            return x.num - y.num;
        });
        render(numarray);
    }

    function render(numarray) {
        document.getElementById('shuffle').innerHTML = '';
        for (var i = 0; i < numarray.length; i++) {
            var box = document.createElement("div");
            var value = document.createElement("div");
            box.className = numarray[i].class;
            value.className = "value";

            value.innerHTML = numarray[i].num;
            box.appendChild(value);

            document.getElementById("shuffle").appendChild(box);
        }
    }
    return {
        shuffle,
        sort
    }
})();

function load() {
    shufflesort.sort();
}
window.onload = load;