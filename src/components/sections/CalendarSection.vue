<template>
        <div id="content">
            <h1  style="font-size:45px">Događaji</h1>
            <h5 style="margin-bottom:40px">Uključi se i ti i postani deo našeg tima! Kontaktiraj nas ili nas poseti u našim prostorijama</h5>
    <div id="background">

        <div style="width:100%; justify-content:center">
            
        </div>
            <div class="semi">
                <div class="event">
                    <Calendar :inline="true" v-model="date" :showOtherMonths="true"  autoZIndex=true :showWeek="true" width="100%" @date-select="changeEvents" panelClass="new" view="date" :yearNavigator="true" :monthNavigator="true" yearRange="2020:2030">
                        <template #date="slotProps" style="width:40px">
                            <h5 :class="[isItSpecial(slotProps) ? 'special-day' : 'notSpecial']">
                                {{slotProps.date.day}}
                            </h5>
                    </template>
                    </Calendar>
                </div>
                <div class="event eventMob" v-if="checkIfArrayIsEmpty" > 
                     <Fieldset legend="Termini"  class="p-fieldset-legend p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"> 
                            <Accordion :multiple="false">
                                <AccordionTab v-for="i in dailyEvents" :key="i" v-bind:header="i[4]">
                                <TabView >
                                    <TabPanel header="Info" > 
                                        <p>
                                            Sprat : {{i[5][0]}} <b>|</b>
                                            Termin : {{i[5][1]}}
                                        </p>
                                     </TabPanel>
                                </TabView>
                            </AccordionTab>
                        </Accordion>
                     </Fieldset>
                </div> 
                <div class="event eventMob" v-else> 
                    <Fieldset legend="Termini"  class="p-fieldset-legend p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"> 
                        <p class="noDropdown"> Nema događaja </p> 
                     </Fieldset> 
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import Calendar from 'primevue/calendar'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Fieldset from 'primevue/fieldset';


export default {
     components: {
         Calendar,
         Accordion,
         AccordionTab,
         TabView,
         TabPanel,
         Fieldset,
    },
    data() {
        return {
            date : new Date().toString().slice(3,15), 
            day: '',
            month: "",
            year: "",
            events: [
        {
            title  : 'event1',
            start  : '2010-01-01',
        },
        {
            title  : 'event2',
            start  : '2010-01-05',
            end    : '2010-01-07',
        },
        {
            title  : 'event3',
            start  : '2010-01-09T12:30:00',
            allDay : false,
        },
      ],
            Events: [
                [4, "May", 22, 2021, "Python kurs",[ "I", "12:00"],'blue'],
                [4, "May", 25, 2021,"Kurs robotike za decu",[ "II", "12:00"],'indigo'],
                [4, "May", 26, 2021,"Wordpress kurs", ["I", "14:00"],'deep-purple'],
                [4, "May", 24, 2021,"JS kurs", ["II", "16:00"],'cyan'],
                [4, "May", 19, 2021, "Python kurs",[ "I", "12:00"],'green'],
                [4, "May", 25, 2021,"JS kurs",[ "II", "12:00"],'orange'],
                [4, "May", 10, 2021,"Python kurs", ["I", "14:00"],'grey'],
                [4, "May", 24, 2021,"JS kurs", ["II", "16:00"],'red'],
                [4, "May", 22, 2021, "Python kurs",[ "I", "12:00"],'yellow'],
                [4, "May", 25, 2021,"Kurs robotike za decu",[ "II", "12:00"],'blue'],
                [4, "May", 26, 2021,"Wordpress kurs", ["I", "14:00"],'cyan'],
                [4, "May", 20, 2021,"Python kurs", ["II", "16:00"],'gray'],
                [4, "May", 24, 2021, "Python kurs",[ "I", "12:00"],'grey-darken'],
                [4, "May", 25, 2021,"Kurs robotike za decu",[ "II", "12:00"],'green'],
                [4, "May", 15, 2021,"Wordpress kurs", ["I", "14:00"],'red'],
                [4, "May", 24, 2021,"JS kurs", ["II", "16:00"],'pink'],
            ],
            dailyEvents: [],
        }
    },
    computed: {
        checkIfArrayIsEmpty(){
            return this.dailyEvents.length>0;
        }
    },

    methods: {
        changeEvents(value) {
            this.dailyEvents = [];
            this.dateMonthYear(String(value));
            for (let j of this.Events)
            if (this.year==j[3] && this.month==j[1] && this.day==j[2]) this.dailyEvents.push(j);
        },
        dateMonthYear(value){
            this.day=value.slice(8,10); 
            this.month=value.slice(4,7); 
            this.year=value.slice(11,15); 
        },
        isItSpecial(value){ 
            let slot=false;
            for(let k of this.Events)
            if (value.date.year==k[3] && value.date.month==k[0] && value.date.day==k[2]) slot=true;
            return slot;
        },
    },
    created() {
        this.day=this.date.slice(5,7); 
        this.month=this.date.slice(1,4); 
        this.year=this.date.slice(8,12); 
        for (let j of this.Events)
            if (this.year==j[3] && this.month==j[1] && this.day==j[2]) this.dailyEvents.push(j);
    },
}
</script>
<style scoped>

#content {
    padding-top: 100px;
    justify-content: center;
}

#background {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../../assets/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-o.jpg);
    background-size: cover; 
    background-position-y: 70rem;
    background-attachment: fixed;
}
h1 {
    text-align: center;
    color: #293331;
}
h5 {
    text-decoration-color: #293331;
    text-align: center;
}

.p-accordion-content {
    font-size: 15px;
    padding: 0%;
}

.p-accordion-header {
    font-family:'Times New Roman', Times, serif;
    font-size: 1.4rem;
}



.noDropdown {
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 1.28rem;
    border: 0 none;
    color: rgba(0, 0, 0, 0.87);
    background: #ffffff;
    font-weight: 400;
    border-radius: 4px;
    transition: none;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-size: 1rem;
    text-decoration: none;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
}

.noDropdown:hover {
    border-color: transparent;
    background-color: #f3f2f2;
}

.new {
    padding: 30px 35px 30px 35px;
    font-size:18px;
    background-blend-mode: color-burn;
}


.special-day {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgb(35, 35, 51);
    text-align: center;
    font-size: 20px;
    border-bottom: 3px solid #687070;
    margin:25px;
    padding: 15px;
}

.notSpecial {
    font-size: 21px;
    margin:25px;
    padding: 15px;
}

.ui-datepicker td span, .ui-datepicker td a {
    padding: 15px;
}

.p-calendar {
    font-size: 20px;
    opacity: 100%;
    color: rgb(255, 0, 0);
}

.semi {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    padding: 6%;
    box-shadow: 0px 2px 15px rgb(0 1 0 / 10%);
}

.event {
    float:left;
}

.eventMob {
    min-width: 45%;
    margin-left:4rem
}

@media screen and (max-width:1038px) {
    .eventMob {
        margin-top: 30px;
        margin-left: 0;
        min-width: 0;
    }

}


@media screen and (max-width:940px) {
    #content {
        padding:100px  0%;
        justify-content: center;
    }
    #semi {
        flex-direction: column;
        padding:0%
    }
    .event {
    float:left;
    min-width: 330px;
    }
    .special-day {
        border-bottom: 5px solid #363838;
    }
    .eventMob {
        margin-top: 2rem;
    }
}

</style> 