<script>
  export default {
    data() {
      return {
        display: '',
        action: '',
        error: ''
      }
    },
    methods: {
      addAnItem: function addAnItem(item) {
        if (this.display.length < 29) {
          if ('+-*/'.includes(item)) {
            if (!this.display.split('').some(el => '+-*/'.includes(el))) {
              this.display += item;
              this.action = item;
            }
          } else {
            this.display += item;
          }
        } else {
          this.error = "The limit of characters is 29";

          setTimeout(() => {
            this.error = "";
          }, 3000)
        }
      },
      deleteDisplay: function deleteDisplay() {
        this.display = '';
      },
      calculate: function calculate() {
        let arr = this.display.split(/\+|\-|\*|\//);

        if (this.action === '+') {
          this.display = +arr[0] + +arr[1] + "";
        }

        if (this.action === '-') {
          this.display = +arr[0] - +arr[1] + "";
        }

        if (this.action === '*') {
          this.display = +arr[0] * +arr[1] + "";
        }

        if (this.action === '/') {
          this.display = +arr[0] / +arr[1] + "";
        }
      }
    }
  }
</script>

<template>
  <div class="calc1">
    <div class="calculator">
			<div class="row">
				<input :class="{'calculator__display': true, 'calculator__display--error': !!error}" type="text" readonly :value="error || display">
			</div>
      <ul class="row">
        <li class="cell" v-for="number in [1, 2, 3]" v-bind:key="number">
          <button class="calculator__button" @click="addAnItem(number)">
            {{ number }}
          </button>
        </li>

        <li class="cell">
          <button class="calculator__button" @click="addAnItem('+')">
            +
          </button>
        </li>
    	</ul>

      <ul class="row">
        <li class="cell" v-for="number in [4, 5, 6]" v-bind:key="number">
          <button class="calculator__button" @click="addAnItem(number)">
            {{ number }}
          </button>
        </li>

        <li class="cell">
          <button class="calculator__button" @click="addAnItem('-')">
            -
          </button>
        </li>
      </ul>

      <ul class="row">
        <li class="cell" v-for="number in [7, 8, 9]" v-bind:key="number">
          <button class="calculator__button" @click="addAnItem(number)">
            {{ number }}
          </button>
        </li>

        <li class="cell">
          <button class="calculator__button" @click="addAnItem('*')">
            *
          </button>
        </li>
      </ul>

			<ul class="row">
        <li class="cell">
          <button class="calculator__button" @click="deleteDisplay()">
            DEL
          </button>
        </li>

        <li class="cell">
          <button class="calculator__button" @click="addAnItem(0)">
            0
          </button>
        </li>

        <li class="cell">
          <button class="calculator__button" @click="addAnItem('/')">
            /
          </button>
        </li>

        <li class="cell">
          <button class="calculator__button" @click="calculate()">
            =
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .calc1 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: fit-content;
  }

	.calculator {
		background-color: rgb(114, 175, 177);
		border: 10px rgb(114, 175, 177) solid;
		border-radius: 8px;
	}

  .row {
    display: flex;
    padding: 0;
  }

  .cell {
    display: block;
  }

  .calculator__button {
    display: flex;
		justify-content: space-between;
		align-items: center;
    width: 100px;
    height: 50px;
    font-size: 24px;
  }

	.calculator__display {
		width: 400px;
		height: 50px;
		text-align: end;
		font-size: 24px;
	}

  .calculator__display--error {
    color: red;
  }
</style>