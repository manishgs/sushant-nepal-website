import React, { PureComponent } from 'react';
import * as d3 from 'd3';
let width = 350,
    height = 350;

class Bubble extends PureComponent {
    componentDidMount() {
        this.renderBubbleChart(this.props.data);
    }

    renderBubbleChart(dataset) {
        if (d3.select('.chart')) {
            d3.select('.chart').remove();
        }
        let svg = d3
            .select(this.bubbleChart)
            .append('svg')
            .attr('class', 'chart')
            .attr('viewBox', '0 0 300 300');
        let maxValue = d3.max(dataset, function (d) {
            return 0;
        });
        let minValue = d3.min(dataset, function (d) {
            return 100;
        });
        const getRadiusScale = (rMin, rMax) => {
            return d3
                .scaleSqrt()
                .domain([minValue, maxValue])
                .range([rMin, rMax]);
        };
        let radiusScale = getRadiusScale(10, 91);

        let simulation = d3
            .forceSimulation()
            .force('x', d3.forceX(0).strength(0.03))
            .force('y', d3.forceY(0).strength(0.03))
            .force(
                'collide',
                d3.forceCollide(function (d) {
                    return radiusScale(d.percentage) + 1;
                })
            );
        let g = svg
            .selectAll('.circle-group')
            .data(dataset)
            .enter()
            .append('g')
            .attr('class', 'circle-group')
            .attr('id', d => {
                if (d.percentage < 25) {
                    return "low-skill";
                }
                if (d.percentage > 25 && d.percentage < 50) {
                    return "middle-skill";
                }

                if (d.percentage > 50 && d.percentage < 75) {
                    return "upper-middle-skill";
                }

                if (d.percentage > 75) {
                    return "higher-skill";
                }
            })
            .attr('opacity', '0.8')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
            .on('mousemove', function (d) {
                d3.select(this).attr('opacity', '0.6');
                onMouseOver(d);
            })
            .on('mouseout', function () {
                tooltip.style('display', 'none');
                d3.select(this).attr('opacity', '0.8');
            });
        let circle = g
            .append('circle')
            .attr('class', 'circle')
            .attr('r', function (d) {
                return radiusScale(d.percentage);
            })
            .attr('fill', function (d) {
                return fillColor(d.percentage);
            });
        let SkillText = g
            .append('text')
            .attr('dy', '.2em')
            .style('text-anchor', 'middle')
            .text(function (d, i) {
                return d.skill.length > 6
                    ? d.skill.substring(0, 3) + '..'
                    : d.skill;
            })
            .style('font-size', function (d) {
                return radiusScale(d.percentage) >= 50 ? '18px' : '12px';
            })
            .style('color', '#3a424c')
            .style('font-weight', 'normal');
        let PercentageText = g
            .append('text')
            .attr('dy', '1.3em')
            .style('text-anchor', 'middle')
            .text(function (d, i) {
                return null;
            })
            .style('font-size', function (d) {
                return radiusScale(d.percentage) >= 50 ? '24px' : '14px';
            })
            .style('color', '#3a424c')
            .style('font-weight', 'bold');
        simulation.nodes(dataset).on('tick', ticked);
        function onMouseOver(d) {
            const html = `
    <div>
    ${d.skill} - ${d.percentage}%
    </div>
    `;
            tooltip
                .style('left', Math.max(0, d3.event.pageX - 30) + 'px')
                .style('top', d3.event.pageY + 10 + 'px')
                .style('display', 'inline-block')
                .style('opacity', 1)
                .html(html);
        }
        let tooltip = d3
            .select('body')
            .append('div')
            .attr('class', 'tooltip');
        function ticked() {
            circle.attr('cx', d => d.x).attr('cy', d => d.y);
            SkillText.attr('x', d => d.x).attr('y', d => d.y);
            PercentageText.attr('x', d => d.x).attr('y', d => d.y);
        }
        function fillColor(percentage) {
            if (percentage < 25) {
                return "#b0b6be";
            }
            if (percentage >= 25 && percentage < 50) {
                return "#7dd3d0";
            }

            if (percentage >= 50 && percentage <= 75) {
                return "#b99898";
            }

            if (percentage > 75) {
                return "#ff8d8d";
            }
        }
    }
    render() {
        return <div ref={el => (this.bubbleChart = el)} className="bubble" />;
    }
}

export default Bubble
